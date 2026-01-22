import type { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-xl rounded-panel border border-border-proof bg-bg-surface p-panel-padding shadow-surface">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-button border border-border-proof px-3 py-1 text-sm text-text-secondary"
          >
            Fechar
          </button>
        </div>
        <div className="mt-4 text-sm text-text-secondary">{children}</div>
      </div>
    </div>
  );
}
