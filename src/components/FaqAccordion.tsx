import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-[860px]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="relative">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start gap-4 py-6 text-left transition-colors"
            >
              <span
                className="font-display shrink-0 text-[24px] font-extrabold leading-none"
                style={{ color: "#FF6814" }}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[18px] font-bold text-[#0C2D42] md:text-[20px]">{it.q}</span>
              <span
                aria-hidden
                className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-[8px] text-white transition-colors"
                style={{ background: isOpen ? "#0C2D42" : "#2E86BD" }}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pl-12 pr-14 text-[16px] leading-relaxed text-[#1D2B35]">
                {it.a}
              </div>
            )}
            <svg viewBox="0 0 1000 8" preserveAspectRatio="none" className="block h-2 w-full" aria-hidden>
              <path d="M0 4 Q 250 0 500 4 T 1000 4" stroke="#CBEFFF" strokeWidth="2" fill="none" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}