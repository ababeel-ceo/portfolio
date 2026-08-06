import { useEffect, useRef, useState } from 'react';
import { useChat } from '../hooks/useChat';
import { Icons } from './Icons';

const GREETING =
  "Hi — I'm AbdullaX, Abdulla's AI assistant. Ask me anything about his experience, projects, skills, or impact.";

const STARTERS = [
  'What is Abdulla’s experience?',
  'Walk me through the OCR project',
  'What’s his tech stack?',
  'Why should I hire him?',
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { messages, isLoading, error, followUps, send, reset } = useChat({ greeting: GREETING });
  const [draft, setDraft] = useState('');

  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  // Auto-scroll to the newest message / typing indicator.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading, followUps]);

  // Focus the input when the panel opens; close on Escape.
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 180);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Auto-grow the textarea up to a max height.
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }, [draft]);

  const submit = (text) => {
    const value = (text ?? draft).trim();
    if (!value) return;
    send(value);
    setDraft('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const showStarters = messages.length <= 1 && !isLoading;

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Chat with AbdullaX'}
        aria-expanded={open}
        className={`fixed bottom-5 right-5 z-[60] group flex items-center justify-center
          w-14 h-14 rounded-full text-white
          bg-gradient-to-br from-primary-500 to-primary-700
          shadow-lg shadow-primary-900/50 hover:shadow-xl hover:shadow-primary-500/30
          transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0
          ${open ? 'rotate-0' : ''}`}
      >
        {!open && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary-500/60 animate-ping opacity-40" />
        )}
        <span className="relative">
          {open ? <Icons.close className="w-6 h-6" /> : <Icons.chat className="w-6 h-6" />}
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Chat with AbdullaX"
          className="fixed z-[60] bottom-24 right-5 left-5 sm:left-auto
            w-auto sm:w-[400px] max-w-[calc(100vw-2.5rem)]
            h-[68vh] max-h-[640px] flex flex-col
            rounded-2xl border border-surface-700/60 bg-surface-900/95 backdrop-blur-xl
            shadow-2xl shadow-black/50 overflow-hidden animate-scale-in origin-bottom-right"
        >
          {/* Header */}
          <header className="flex items-center gap-3 px-4 py-3 border-b border-surface-800/80 bg-surface-900/80">
            <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-900/40 shrink-0">
              AX
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-surface-900" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-white font-semibold text-sm leading-tight">AbdullaX</p>
              <p className="text-primary-300/90 text-[11px] font-medium leading-tight">
                Abdulla’s AI · usually instant
              </p>
            </div>
            <button
              onClick={reset}
              aria-label="Clear conversation"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-surface-400 hover:text-white hover:bg-surface-800/70 transition-colors"
            >
              <Icons.refresh className="w-4 h-4" />
            </button>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-surface-400 hover:text-white hover:bg-surface-800/70 transition-colors"
            >
              <Icons.close className="w-4 h-4" />
            </button>
          </header>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            aria-live="polite"
          >
            {messages.map((m) => (
              <Message key={m.id} message={m} />
            ))}

            {isLoading && <TypingIndicator />}

            {error && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-sm bg-accent-500/10 border border-accent-500/30 text-accent-200">
                  {error}
                </div>
              </div>
            )}

            {/* Starter prompts (fresh conversation) */}
            {showStarters && (
              <div className="pt-1 space-y-2">
                <p className="text-surface-500 text-[11px] uppercase tracking-wider font-medium px-1">
                  Try asking
                </p>
                <div className="flex flex-wrap gap-2">
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="text-left text-xs px-3 py-2 rounded-xl bg-surface-800/70 border border-surface-700/50 text-surface-200 hover:border-primary-500/40 hover:text-primary-300 hover:bg-primary-500/5 transition-all duration-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic follow-ups from the backend */}
            {!isLoading && followUps.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {followUps.slice(0, 4).map((f) => (
                  <button
                    key={f}
                    onClick={() => submit(f)}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-200 hover:bg-primary-500/20 transition-colors duration-200"
                  >
                    <Icons.sparkle className="w-3 h-3" />
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-surface-800/80 p-3 bg-surface-900/80">
            <div className="flex items-end gap-2 rounded-xl border border-surface-700/60 bg-surface-950/60 px-3 py-2 focus-within:border-primary-500/50 transition-colors">
              <textarea
                ref={inputRef}
                rows={1}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about Abdulla…"
                maxLength={1000}
                className="flex-1 resize-none bg-transparent text-sm text-surface-100 placeholder:text-surface-500 outline-none leading-relaxed max-h-[120px]"
              />
              <button
                onClick={() => submit()}
                disabled={!draft.trim() || isLoading}
                aria-label="Send message"
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-primary-500 text-white shadow-lg shadow-primary-900/40 hover:bg-primary-400 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary-500 transition-colors"
              >
                <Icons.send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-surface-600 text-[10px] mt-1.5 text-center">
              AbdullaX may be imprecise — verify anything important.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function Message({ message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words ${
          isUser
            ? 'rounded-2xl rounded-br-sm bg-primary-500 text-white'
            : 'rounded-2xl rounded-bl-sm bg-surface-800/80 border border-surface-700/50 text-surface-100'
        }`}
      >
        {message.content}
        {!isUser && message.sources?.length > 0 && (
          <div className="mt-2.5 pt-2 border-t border-surface-700/50 flex flex-wrap gap-1.5">
            {message.sources.slice(0, 3).map((s) => (
              <span
                key={s.id}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-900/60 text-surface-400 text-[10px] font-medium border border-surface-700/40"
                title={s.category}
              >
                <Icons.document className="w-2.5 h-2.5" />
                {s.title}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-sm bg-surface-800/80 border border-surface-700/50 px-4 py-3 flex items-center gap-1.5">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="w-1.5 h-1.5 rounded-full bg-primary-300/80 animate-bounce"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
