import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Flame, Phone } from "lucide-react";
import { NAV_LINKS, BUSINESS, getWhatsAppLink } from "../../config";

export default function Navbar({ activeId, containerRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;
    const handleScroll = () => setScrolled(el.scrollTop > 40);
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 glass shadow-glass" : "py-5 bg-transparent"}`}>
        <nav className="container-custom flex items-center justify-between gap-4" aria-label="Main navigation">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 font-display text-lg md:text-2xl tracking-tight gradient-text flex-shrink-0 uppercase">
            <Flame size={22} className="text-orange" /> {BUSINESS.name}
          </button>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
                    activeId === link.id ? "text-orange" : "text-cloud/70 hover:text-orange"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={getWhatsAppLink(`Hi! I'd like to book a free trial at ${BUSINESS.fullName}.`)}
              target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-orange-gradient text-white text-xs uppercase tracking-wide font-bold px-5 py-2.5 rounded-full shadow-soft hover:shadow-lg transition-all"
            >
              <Phone size={14} /> Free Trial
            </a>
            <button className="lg:hidden text-cloud" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-ink/95 lg:hidden">
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.35 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-xs glass p-8 flex flex-col overflow-y-auto"
            >
              <button className="self-end text-cloud mb-10" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={26} />
              </button>
              <ul className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.li key={link.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`font-display text-2xl uppercase ${activeId === link.id ? "text-orange" : "text-cloud"}`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
