import { useCallback, useEffect, useRef, useState } from 'react';
import { useChat } from '../hooks/useChat';
import { Icons } from './Icons';

const GREETING =
  "Hi — I'm AbdullaX, Abdulla's AI assistant. Ask me anything about his experience, projects, skills, or impact.";

const STARTERS = [
  'What is Abdulla’s experience?',
  'Walk me through the B2B insurance portal',
  'What’s his tech stack?',
  'Why should I hire him?',
];

// First-visit nudge: shows once per browsing session, never auto-opens the chat.
const NUDGE_KEY = 'abdullax:nudge-seen';
const NUDGE_DELAY_MS = 4000;
const NUDGE_LIFETIME_MS = 15000;

/**
 * Drives the unobtrusive welcome badge: appears a few seconds after landing,
 * retires after a short lifetime or on any interaction, and stays retired for
 * the rest of the session.
 */
function useWelcomeNudge(isChatOpen) {
  const [visible, setVisible] = useState(false);
  const [seen, setSeen] = useState(() => {
    try {
      return sessionStorage.getItem(NUDGE_KEY) === '1';
    } catch {
      return true; // storage blocked — stay quiet rather than nag on every view
    }
  });

  const dismiss = useCallback(() => {
    setVisible(false);
    setSeen(true);
    try {
      sessionStorage.setItem(NUDGE_KEY, '1');
    } catch {
      /* ignore */
    }
  }, []);

  // Opening the chat counts as the interaction that retires the nudge.
  useEffect(() => {
    if (isChatOpen) dismiss();
  }, [isChatOpen, dismiss]);

  useEffect(() => {
    if (seen || isChatOpen) return;
    const show = setTimeout(() => setVisible(true), NUDGE_DELAY_MS);
    return () => clearTimeout(show);
  }, [seen, isChatOpen]);

  useEffect(() => {
    if (!visible) return;
    const hide = setTimeout(dismiss, NUDGE_LIFETIME_MS);
    return () => clearTimeout(hide);
  }, [visible, dismiss]);

  return { visible, seen, dismiss };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { messages, isLoading, error, followUps, send, reset } = useChat({ greeting: GREETING });
  const [draft, setDraft] = useState('');
  const nudge = useWelcomeNudge(open);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

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
  const attention = !open && !nudge.seen;

  return (
    <>
      {/* Welcome nudge — a hint, never an interruption */}
      {nudge.visible && !open && (
        <div
          role="status"
          className="fixed bottom-[6.25rem] right-5 z-[60] w-[19.5rem] max-w-[calc(100vw-2.5rem)]
            origin-bottom-right animate-scale-in rounded-3xl border border-white/[0.09]
            bg-surface-900/95 p-4 shadow-float backdrop-blur-xl sm:bottom-[6.75rem]"
        >
          <div className="flex items-start gap-3">
            <span className="kicker !text-primary-300">
              <Icons.sparkle className="h-3.5 w-3.5" />
              Ask AbdullaX
            </span>
            <button
              onClick={nudge.dismiss}
              aria-label="Dismiss chat suggestion"
              className="-mr-1 -mt-1 ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-surface-500 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <Icons.close className="h-3.5 w-3.5" />
            </button>
          </div>

          <p className="mt-2.5 text-[13px] leading-relaxed text-surface-200">
            <span aria-hidden="true">👋</span> Hi! Ask me anything about Abdulla’s projects,
            experience, or skills.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="btn-primary mt-4 w-full !py-2.5 !text-[13px]"
          >
            <Icons.chat className="h-4 w-4" />
            Start a chat
          </button>

          {/* Tail pointing at the launcher */}
          <span
            aria-hidden="true"
            className="absolute -bottom-1.5 right-9 h-3 w-3 rotate-45 border-b border-r border-white/[0.09] bg-surface-900/95"
          />
        </div>
      )}

      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Chat with AbdullaX'}
        aria-expanded={open}
        className={`group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full
          border border-white/[0.09] bg-surface-900/[0.85] py-2 pl-2 text-left shadow-float
          backdrop-blur-xl transition-all duration-300 ease-out
          hover:-translate-y-0.5 hover:border-primary-400/40 active:translate-y-0
          ${open ? 'pr-2' : 'pr-2 sm:pr-5'} ${attention ? 'animate-bob' : ''}`}
      >
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-300 to-primary-600 text-surface-950 shadow-[0_10px_24px_-10px_rgba(56,188,220,0.9)]">
          {attention && (
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-pulse-ring rounded-full bg-primary-400/50"
            />
          )}
          <span className="relative">
            {open ? <Icons.close className="h-5 w-5" /> : <Icons.chat className="h-5 w-5" />}
          </span>
        </span>

        {!open && (
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-primary-300/90">
              Ask AbdullaX
            </span>
            <span className="text-[13px] font-semibold text-white">Recruiter chat</span>
          </span>
        )}

        {attention && (
          <span
            aria-hidden="true"
            className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-surface-900 bg-emerald-400"
          />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with AbdullaX"
          className="fixed bottom-[6.25rem] left-5 right-5 z-[60] flex h-[68vh] max-h-[640px]
            w-auto max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl
            border border-white/[0.09] bg-surface-900/95 shadow-float backdrop-blur-xl
            animate-scale-in origin-bottom-right sm:left-auto sm:w-[400px]"
        >
          {/* Header */}
          <header className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-300 to-primary-600 text-sm font-bold text-surface-950">
              AX
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface-900 bg-emerald-400" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-semibold leading-tight text-white">AbdullaX</p>
              <p className="text-[11px] font-medium leading-tight text-primary-300/90">
                Abdulla’s AI · usually instant
              </p>
            </div>
            <button
              onClick={reset}
              aria-label="Clear conversation"
              className="flex h-8 w-8 items-center justify-center rounded-full text-surface-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <Icons.refresh className="h-4 w-4" />
            </button>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-surface-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <Icons.close className="h-4 w-4" />
            </button>
          </header>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((m) => (
              <Message key={m.id} message={m} />
            ))}

            {isLoading && <TypingIndicator />}

            {error && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-accent-500/30 bg-accent-500/10 px-3.5 py-2.5 text-sm text-accent-200">
                  {error}
                </div>
              </div>
            )}

            {showStarters && (
              <div className="space-y-2.5 pt-1">
                <p className="kicker px-1">Try asking</p>
                <div className="flex flex-wrap gap-2">
                  {STARTERS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-left text-xs text-surface-200 transition-all duration-300 hover:border-primary-400/40 hover:bg-primary-500/10 hover:text-primary-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!isLoading && followUps.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {followUps.slice(0, 4).map((f) => (
                  <button
                    key={f}
                    onClick={() => submit(f)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary-400/30 bg-primary-500/10 px-3 py-1.5 text-xs text-primary-200 transition-colors duration-300 hover:bg-primary-500/20"
                  >
                    <Icons.sparkle className="h-3 w-3" />
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-white/[0.06] bg-white/[0.02] p-3">
            <div className="flex items-end gap-2 rounded-2xl border border-white/[0.08] bg-surface-950/60 px-3 py-2 transition-colors focus-within:border-primary-400/50">
              <textarea
                ref={inputRef}
                rows={1}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about Abdulla…"
                maxLength={1000}
                className="max-h-[120px] flex-1 resize-none bg-transparent text-sm leading-relaxed text-surface-100 outline-none placeholder:text-surface-500"
              />
              <button
                onClick={() => submit()}
                disabled={!draft.trim() || isLoading}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-primary-200 to-primary-400 text-surface-950 transition-all duration-300 hover:from-primary-100 hover:to-primary-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:from-primary-200 disabled:hover:to-primary-400"
              >
                <Icons.send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-surface-600">
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
        className={`max-w-[85%] whitespace-pre-wrap break-words px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'rounded-2xl rounded-br-md bg-gradient-to-b from-primary-300 to-primary-500 font-medium text-surface-950'
            : 'rounded-2xl rounded-bl-md border border-white/[0.07] bg-white/[0.04] text-surface-100'
        }`}
      >
        {message.content}
        {!isUser && message.sources?.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-2">
            {message.sources.slice(0, 3).map((s) => (
              <span
                key={s.id}
                className="inline-flex items-center gap-1 rounded-full border border-white/[0.06] bg-surface-950/60 px-2 py-0.5 text-[10px] font-medium text-surface-400"
                title={s.category}
              >
                <Icons.document className="h-2.5 w-2.5" />
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
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/[0.07] bg-white/[0.04] px-4 py-3">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary-300/80"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
