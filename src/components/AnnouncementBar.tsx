import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";

const KEY = "fcp_announcement_dismissed_v1";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) !== "1") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);
  if (!visible) return null;
  return (
    <div
      className="w-full text-white transition-[max-height] duration-300"
      style={{ background: "#2E86BD" }}
      role="region"
      aria-label="Site announcement"
    >
      <div className="container-wide flex min-h-[46px] items-center justify-between gap-3 py-2 text-[13px] font-medium">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="inline-flex h-2.5 w-2.5 rounded-full"
            style={{ background: "#FF6814", boxShadow: "0 0 0 3px rgba(255,104,20,0.25)" }}
          />
          <span className="hidden sm:inline">24/7 plumbing help available across Palm Beach County.</span>
          <span className="sm:hidden">24/7 Palm Beach plumbing help</span>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="tel:+15615550136"
            className="hidden items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] font-semibold underline-offset-4 hover:underline sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            <span>Call 561-555-0136</span>
          </a>
          <button
            type="button"
            onClick={() => {
              try { sessionStorage.setItem(KEY, "1"); } catch {}
              setVisible(false);
            }}
            aria-label="Dismiss announcement"
            className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}