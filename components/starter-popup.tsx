"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const STORAGE_KEY = "sa-starter-popup-seen";
const HIDDEN_ON = ["/pricing", "/contact", "/privacy", "/terms"];
const DELAY_MS = 12000;

// A small, non-blocking offer card. It appears once per visitor, after a
// short delay or once they have scrolled a little, and is easy to dismiss.
export default function StarterPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(p + "/")))
      return;
    let seen = true;
    try {
      // If storage is unavailable we stay quiet rather than risk repeating.
      seen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = true;
    }
    if (seen) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      setOpen(true);
    };
    const timer = window.setTimeout(show, DELAY_MS);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max > 0.4) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;
  return (
    <aside
      className="starter-popup"
      role="dialog"
      aria-label="Starter website offer"
    >
      <button
        type="button"
        className="starter-popup-close"
        aria-label="Close offer"
        onClick={() => setOpen(false)}
      >
        <X size={18} />
      </button>
      <p className="starter-popup-eyebrow">Starter website</p>
      <h2>No website yet?</h2>
      <p>
        A fast, mobile-friendly one-page site for your business, from{" "}
        <strong>KES 15,000</strong>.
      </p>
      <div className="starter-popup-actions">
        <Link
          href="/pricing#starter-website"
          className="button"
          onClick={() => setOpen(false)}
        >
          See the offer
        </Link>
        <button
          type="button"
          className="starter-popup-dismiss"
          onClick={() => setOpen(false)}
        >
          Not now
        </button>
      </div>
    </aside>
  );
}
