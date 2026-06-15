import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info';
}

interface FloatingToastProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

export default function FloatingToast({ toasts, removeToast }: FloatingToastProps) {
  return (
    <div id="toast-container" className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
            className={`pointer-events-auto p-4 rounded-xl shadow-lg border flex items-center gap-3 backdrop-blur-md ${
              toast.type === 'success'
                ? 'bg-emerald-500/95 text-white border-emerald-400'
                : 'bg-studio-charcoal text-white border-zinc-700'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle className="w-5 h-5 shrink-0 text-emerald-100" />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 text-studio-accent" />
            )}
            <p className="text-sm font-medium tracking-wide">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-auto text-white/70 hover:text-white text-xs font-bold px-1.5 py-0.5 hover:bg-white/10 rounded transition-colors"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
export type { Toast };
