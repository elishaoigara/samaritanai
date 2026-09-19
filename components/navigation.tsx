"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["Products", "/products"],
  ["Pricing", "/pricing"],
  ["About us", "/about"],
];
export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Samaritan AI home">
      <img src="/icon.svg" alt="" width="37" height="37" />
      <span>
        samaritan<span className="brand-ai">ai</span>
        <span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav
          aria-label="Main navigation"
          id="main-navigation"
          className={open ? "navigation open" : "navigation"}
        >
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path.startsWith(href) ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta">
            Let’s talk <ArrowUpRight size={17} />
          </Link>
        </nav>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Logo />
          <p>
            Practical AI. Thoughtful software.
            <br />
            Built for East Africa’s next chapter.
          </p>
          <span className="location-label">
            Nairobi, Kenya · Working across borders
          </span>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/solutions">Our solutions</Link>
          <Link href="/industries">Your industry</Link>
          <Link href="/products">Product roadmap</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div>
          <h3>Get to know us</h3>
          <Link href="/about">About Samaritan</Link>
          <Link href="/use-cases">What’s possible</Link>
          <Link href="/demo">Explore the demo</Link>
          <Link href="/contact">Start a conversation</Link>
        </div>
        <div className="footer-note">
          <h3>
            Good technology starts
            <br />
            with a real conversation.
          </h3>
          <Link href="/contact" className="text-link">
            Tell us your idea <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Samaritan AI</span>
        <span>Built with purpose. Built for people.</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Website terms</Link>
        </div>
      </div>
    </footer>
  );
}
