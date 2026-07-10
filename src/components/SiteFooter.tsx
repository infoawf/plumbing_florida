import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { PalmSilhouette, Birds, WaveDivider } from "./decor";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0C2D42", color: "#F3FBFE" }}>
      <div aria-hidden className="h-[3px] w-full" style={{ background: "#FF6814" }} />
      <WaveDivider fill="#0C2D42" className="-mt-[1px]" flip />

      <PalmSilhouette color="#0A2436" className="pointer-events-none absolute -left-8 top-16 h-72 w-56 opacity-70" />
      <PalmSilhouette color="#0A2436" className="pointer-events-none absolute -right-10 bottom-24 h-80 w-64 opacity-60" />
      <Birds color="#2E86BD" className="pointer-events-none absolute right-32 top-10 h-6 w-20 opacity-40" />

      <div className="container-wide relative grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="white" />
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[#CBEFFF]">
            Honest Service. Smooth Flow. Reliable plumbing help for homes across Palm Beach County.
          </p>
          <p className="mt-3 text-[12.5px] uppercase tracking-[0.18em] text-[#39A9E0]">
            Licensed · Insured · Bonded
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#39A9E0]">Services</h3>
          <ul className="space-y-2 text-[15px]">
            {["Emergency Plumbing", "Drain Cleaning", "Leak Detection", "Water Heaters", "Sewer Services", "Water Filtration"].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-[#F3FBFE] hover:text-[#FF6814]">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#39A9E0]">Company</h3>
          <ul className="space-y-2 text-[15px]">
            <li><Link to="/about" className="hover:text-[#FF6814]">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF6814]">Contact Us</Link></li>
            <li><a href="#" className="hover:text-[#FF6814]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FF6814]">Accessibility</a></li>
            <li><a href="#" className="hover:text-[#FF6814]">Terms</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-[#39A9E0]">Get in touch</h3>
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6814]" aria-hidden />
              <a href="tel:+15615550136" className="hover:text-[#FF6814]">561-555-0136</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6814]" aria-hidden />
              <a href="mailto:service@floridacoastplumbing.com" className="hover:text-[#FF6814]">
                service@floridacoastplumbing.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6814]" aria-hidden />
              <span>Palm Beach County, Florida</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6814]" aria-hidden />
              <span>
                Mon–Fri: 7:00 AM–7:00 PM<br />
                Sat: 8:00 AM–5:00 PM<br />
                Urgent: 24/7
              </span>
            </li>
          </ul>
          <p className="mt-4 text-[12px] text-[#6E7D86]">License #: to be added</p>
        </div>
      </div>

      <div className="relative border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-5 text-[13px] text-[#6E7D86] md:flex-row">
          <span>© {year} Florida Coast Plumbing. All rights reserved.</span>
          <span className="opacity-70">Placeholder site — replace business details before launch.</span>
        </div>
      </div>
    </footer>
  );
}