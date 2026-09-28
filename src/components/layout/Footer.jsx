import { AtSign, Users, MessageSquare, MapPin, Phone, Clock, Flame } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "../../config";

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer id="contact" className="snap-section bg-surface text-cloud/80 pt-20 pb-8 flex flex-col justify-end">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="flex items-center gap-2 font-display text-2xl text-cloud mb-3 uppercase">
            <Flame size={20} className="text-orange" /> {BUSINESS.name}
          </h3>
          <p className="text-sm leading-relaxed text-cloud/60 mb-4 font-body">{BUSINESS.description}</p>
          <div className="flex gap-3">
            {[AtSign, Users, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link"
                className="w-9 h-9 rounded-full border border-cloud/20 flex items-center justify-center hover:bg-orange hover:border-orange transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-cloud text-sm uppercase tracking-widest mb-4 font-body font-bold">Explore</h4>
          <ul className="space-y-2.5 text-sm font-body">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button onClick={() => scrollToSection(link.id)} className="hover:text-orange transition-colors">{link.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-cloud text-sm uppercase tracking-widest mb-4 font-body font-bold">Visit Us</h4>
          <ul className="space-y-2.5 text-sm font-body">
            <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 flex-shrink-0" /> {BUSINESS.address}</li>
            <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5 flex-shrink-0" /> {BUSINESS.phone}</li>
            <li className="flex items-start gap-2"><Clock size={15} className="mt-0.5 flex-shrink-0" /> {BUSINESS.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container-custom pt-6 border-t border-cloud/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cloud/40 font-body">
        <p>© {new Date().getFullYear()} {BUSINESS.fullName}. All rights reserved.</p>
        <p>No excuses. Just results.</p>
      </div>
    </footer>
  );
}
