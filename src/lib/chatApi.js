// ============================================================================
//  Chat API client — talks to the AbdullaX backend (`POST /chat`).
//  The backend contract (see backend/app/schemas.py):
//    request : { conversation_id, user_message, chat_history: [{role, content}] }
//    response: { response, sources[], follow_ups[], answered_by, ... }
// ============================================================================

// Base URL is build-time configurable so the same bundle works locally and in
// production. Set VITE_API_URL in portfolio/.env (see .env.example).
export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
).replace(/\/+$/, '');

// How long to wait before giving up on a single request (ms).
const REQUEST_TIMEOUT_MS = 30000;

const CONVERSATION_KEY = 'abdullax:conversation-id';

/** Generate a UUID, falling back for older/insecure-context browsers. */
function generateId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'conv-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
}

/**
 * Return a stable conversation id, persisted in localStorage so the backend can
 * keep building the same conversation (history compaction, etc.) across reloads.
 */
export function getConversationId() {
  try {
    let id = localStorage.getItem(CONVERSATION_KEY);
    if (!id) {
      id = generateId();
      localStorage.setItem(CONVERSATION_KEY, id);
    }
    return id;
  } catch {
    // localStorage blocked (private mode / SSR) — fall back to a per-load id.
    return generateId();
  }
}

/** Start a fresh conversation (used by the "clear chat" action). */
export function resetConversation() {
  try {
    localStorage.removeItem(CONVERSATION_KEY);
  } catch {
    /* ignore */
  }
  return getConversationId();
}

/**
 * Send one message to the assistant and return the parsed response.
 *
 * @param {Object}   params
 * @param {string}   params.message          The user's new message.
 * @param {Array}    [params.history]         Prior turns: [{ role, content }].
 * @param {string}   [params.conversationId]  Defaults to the persisted id.
 * @param {AbortSignal} [params.signal]       Optional external abort signal.
 * @returns {Promise<{response: string, sources: Array, follow_ups: string[], answered_by: string}>}
 */
export async function sendChatMessage({ message, history = [], conversationId, signal } = {}) {
  const trimmed = (message || '').trim();
  if (!trimmed) throw new Error('Message cannot be empty.');

  // Combine an internal timeout with any caller-provided signal.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener('abort', () => controller.abort(), { once: true });
  }

  // Only the role/content fields are part of the contract — strip anything else
  // the UI may have attached (id, sources, timestamps…).
  const chat_history = history
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && m.content)
    .map((m) => ({ role: m.role, content: m.content }));

  let res;
  try {
    res = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversation_id: conversationId || getConversationId(),
        user_message: trimmed,
        chat_history,
      }),
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('The request timed out. Please try again.');
    }
    throw new Error('Could not reach the assistant. Please check your connection and try again.');
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    let detail = '';
    try {
      const body = await res.json();
      detail = body?.detail ? ` (${typeof body.detail === 'string' ? body.detail : 'invalid request'})` : '';
    } catch {
      /* non-JSON error body */
    }
    throw new Error(`The assistant returned an error${detail}. Please try again.`);
  }

  const data = await res.json();
  return {
    response: data.response ?? '',
    sources: Array.isArray(data.sources) ? data.sources : [],
    follow_ups: Array.isArray(data.follow_ups) ? data.follow_ups : [],
    answered_by: data.answered_by ?? 'rag',
  };
}

/** Lightweight health probe — used to show an "offline" hint in the widget. */
export async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/health`, { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}
