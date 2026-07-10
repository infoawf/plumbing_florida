import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Calendar, Phone, ChevronDown, ArrowRight, Wrench, Droplets, Flame } from "lucide-react";
import { Logo } from "./Logo";
import { CoastalLink } from "./CoastalButton";

type NavItem = { to: "/services" | "/about" | "/contact"; label: string; hasMenu?: boolean };
const NAV: readonly NavItem[] = [
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const MEGA_COLUMNS = [
  {
    title: "Plumbing Repairs",
    icon: Wrench,
    items: [
      { name: "Emergency Plumbing", hint: "Urgent leaks and backups" },
      { name: "Leak Detection", hint: "Find hidden water problems" },
      { name: "Pipe Repair", hint: "Damaged and aging lines" },
      { name: "Slab Leak Evaluation", hint: "Under-slab water loss" },
      { name: "Fixture Repair", hint: "Faucets, toilets, valves" },
    ],
  },
  {
    title: "Drains and Sewer",
    icon: Droplets,
    items: [
      { name: "Drain Cleaning", hint: "Slow and blocked drains" },
      { name: "Sewer Line Repair", hint: "Underground line issues" },
      { name: "Camera Inspection", hint: "See inside the line" },
      { name: "Hydro Jetting", hint: "Deep-clear buildup" },
      { name: "Recurring Clogs", hint: "Diagnose the root cause" },
    ],
  },
  {
    title: "Water Systems",
    icon: Flame,
    items: [
      { name: "Water Heater Repair", hint: "Tank and tankless" },
      { name: "Water Heater Installation", hint: "New system setup" },
      { name: "Tankless Water Heaters", hint: "On-demand hot water" },
      { name: "Water Filtration", hint: "Whole-home quality" },
      { name: "Water Softeners", hint: "Hard-water solutions" },
    ],
  },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerServicesOpen, setDrawerServicesOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenuOpen(false), 180);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
        scrolled ? "border-[#CBEFFF] bg-white/95 backdrop-blur" : "border-[#D5E5EC] bg-white"
      }`}
    >
      <div className="container-wide flex items-center justify-between" style={{ minHeight: scrolled ? 72 : 82 }}>
        <Logo className="shrink-0" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = location.pathname === item.to || location.pathname.startsWith(item.to + "/");
            if (item.hasMenu) {
              return (
                <div
                  key={item.to}
                  ref={menuRef}
                  className="relative"
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-expanded={menuOpen}
                    aria-haspopup="true"
                    className={`group inline-flex items-center gap-1 rounded-md px-4 py-2 text-[15px] font-bold transition-colors ${
                      active ? "text-[#0C2D42]" : "text-[#0C2D42] hover:text-[#2E86BD]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${menuOpen ? "rotate-180" : ""}`} aria-hidden />
                    <NavUnderline active={active} />
                  </button>
                  {menuOpen && (
                    <MegaMenu onClose={() => setMenuOpen(false)} />
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group relative inline-flex items-center rounded-md px-4 py-2 text-[15px] font-bold text-[#0C2D42] transition-colors hover:text-[#2E86BD]"
              >
                {item.label}
                <NavUnderline active={active} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA cluster */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+15615550136"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2E86BD] hover:text-[#0C2D42]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            561-555-0136
          </a>
          <CoastalLink to="/contact" size="md" icon={<Calendar className="h-4 w-4" aria-hidden />}>
            Book Online
          </CoastalLink>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="grid h-12 w-12 place-items-center rounded-lg text-[#0C2D42] hover:bg-[#F3FBFE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2E86BD] lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" aria-hidden />
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <MobileDrawer
          onClose={() => setDrawerOpen(false)}
          servicesOpen={drawerServicesOpen}
          setServicesOpen={setDrawerServicesOpen}
        />
      )}
    </header>
  );
}

function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-[3px] origin-center transition-all duration-200 ${
        active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
      }`}
      style={{
        borderRadius: 3,
        background: "linear-gradient(90deg, transparent, #FF6814, transparent)",
      }}
    />
  );
}

function MegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute left-1/2 top-full z-50 mt-2 w-[min(1020px,92vw)] -translate-x-1/2 overflow-hidden rounded-b-[26px] bg-white shadow-[0_30px_60px_-24px_rgba(12,45,66,0.35)]"
      role="menu"
      style={{ borderTop: "4px solid #0C2D42" }}
    >
      <div className="grid gap-6 p-8 md:grid-cols-3">
        {MEGA_COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="mb-3 flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: "#F3FBFE" }}>
                <col.icon className="h-4 w-4" style={{ color: "#2E86BD" }} aria-hidden />
              </span>
              <h3 className="text-[13px] font-extrabold uppercase tracking-[0.16em]" style={{ color: "#2E86BD" }}>
                {col.title}
              </h3>
            </div>
            <ul className="space-y-1.5">
              {col.items.map((it) => (
                <li key={it.name}>
                  <Link
                    to="/services"
                    onClick={onClose}
                    className="group flex items-start gap-3 rounded-lg px-2 py-2 hover:bg-[#FFF7E6]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#39A9E0" }} />
                    <span className="flex-1">
                      <span className="block text-[15px] font-bold text-[#0C2D42]">{it.name}</span>
                      <span className="block text-[12.5px] text-[#6E7D86]">{it.hint}</span>
                    </span>
                    <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-transparent transition-colors group-hover:text-[#FF6814]" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-4 px-8 py-4" style={{ background: "#FFF7E6" }}>
        <p className="text-[14px] font-medium text-[#0C2D42]">
          Not sure what service you need? Tell us what you’re noticing.
        </p>
        <Link
          to="/services"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2E86BD] hover:text-[#0C2D42]"
        >
          View All Services <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}

function MobileDrawer({
  onClose,
  servicesOpen,
  setServicesOpen,
}: {
  onClose: () => void;
  servicesOpen: boolean;
  setServicesOpen: (v: boolean) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0"
        style={{ background: "rgba(12,45,66,0.6)" }}
      />
      <div
        className="absolute right-0 top-0 flex h-full w-[min(420px,92%)] flex-col overflow-y-auto"
        style={{ background: "#FFF7E6", animation: "drawerIn 320ms ease-out" }}
      >
        <style>{`@keyframes drawerIn { from { transform: translateX(100%);} to { transform: translateX(0);} }`}</style>
        <div className="flex items-center justify-between border-b px-5 py-4" style={{ borderColor: "#D5E5EC" }}>
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-lg text-[#0C2D42] hover:bg-white"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <nav className="flex-1 px-5 py-6" aria-label="Mobile primary">
          <button
            type="button"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
            className="flex w-full items-center justify-between border-b py-4 text-[18px] font-bold text-[#0C2D42]"
            style={{ borderColor: "#D5E5EC" }}
          >
            Services
            <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden />
          </button>
          {servicesOpen && (
            <div className="py-3 pl-3">
              {MEGA_COLUMNS.map((c) => (
                <div key={c.title} className="mb-3">
                  <div className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2E86BD]">
                    {c.title}
                  </div>
                  <ul className="space-y-1">
                    {c.items.slice(0, 3).map((it) => (
                      <li key={it.name}>
                        <Link
                          to="/services"
                          onClick={onClose}
                          className="block py-1.5 text-[15px] text-[#0C2D42]"
                        >
                          {it.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link to="/services" onClick={onClose} className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2E86BD]">
                View All Services <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          )}
          {NAV.filter((n) => !n.hasMenu).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={onClose}
              className="block border-b py-4 text-[18px] font-bold text-[#0C2D42]"
              style={{ borderColor: "#D5E5EC" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="border-t px-5 py-5" style={{ borderColor: "#D5E5EC" }}>
          <CoastalLink to="/contact" size="lg" className="w-full" icon={<Calendar className="h-4 w-4" aria-hidden />}>
            Book Online
          </CoastalLink>
          <a
            href="tel:+15615550136"
            className="mt-3 flex items-center justify-center gap-2 rounded-[14px] border-2 border-[#2E86BD] px-5 py-3 text-[15px] font-bold text-[#0C2D42]"
          >
            <Phone className="h-4 w-4" aria-hidden /> Call 561-555-0136
          </a>
          <p className="mt-4 text-center text-[12.5px] text-[#6E7D86]">
            Available 24/7 for urgent plumbing problems.
          </p>
        </div>
      </div>
    </div>
  );
}