import { useCallback, useRef, useState } from 'react';
import { sendChatMessage, resetConversation } from '../lib/chatApi';

let messageSeq = 0;
const nextId = () => `m${++messageSeq}`;

/**
 * Owns the conversation state for the chat widget: the message list, the
 * in-flight/loading flag, errors, and the dynamic follow-up suggestions
 * returned by the backend.
 *
 * @param {{ greeting?: string }} [opts]
 */
export function useChat({ greeting } = {}) {
  const [messages, setMessages] = useState(() =>
    greeting
      ? [{ id: nextId(), role: 'assistant', content: greeting, isGreeting: true }]
      : []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [followUps, setFollowUps] = useState([]);

  // Abort the previous request if the user fires a new one.
  const abortRef = useRef(null);

  const send = useCallback(
    async (text) => {
      const content = (text || '').trim();
      if (!content || isLoading) return;

      // Snapshot the prior turns BEFORE adding the new user message — that's the
      // history the backend expects (user_message is sent separately).
      const history = messages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .map((m) => ({ role: m.role, content: m.content }));

      setError(null);
      setFollowUps([]);
      setMessages((prev) => [...prev, { id: nextId(), role: 'user', content }]);
      setIsLoading(true);

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const data = await sendChatMessage({ message: content, history, signal: controller.signal });
        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            role: 'assistant',
            content: data.response || "Sorry, I couldn't find an answer to that.",
            sources: data.sources,
            answeredBy: data.answered_by,
          },
        ]);
        setFollowUps(data.follow_ups || []);
      } catch (err) {
        if (err.name === 'AbortError') return; // superseded by a newer request
        setError(err.message || 'Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const reset = useCallback(() => {
    abortRef.current?.abort();
    resetConversation();
    setMessages(
      greeting ? [{ id: nextId(), role: 'assistant', content: greeting, isGreeting: true }] : []
    );
    setFollowUps([]);
    setError(null);
    setIsLoading(false);
  }, [greeting]);

  return { messages, isLoading, error, followUps, send, reset };
}
