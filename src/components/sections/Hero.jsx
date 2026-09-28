import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Flame, Dumbbell, Award, Clock } from "lucide-react";
import Button from "../common/Button";
import { getWhatsAppLink, BUSINESS } from "../../config";

const TYPED_WORDS = ["Stronger.", "Faster.", "Fitter.", "Unstoppable."];

function TypedText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_WORDS[wordIndex];
    const speed = deleting ? 55 : 110;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
        else setTimeout(() => setDeleting(true), 1200);
      } else {
        if (text.length > 0) setText(current.slice(0, text.length - 1));
        else {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPED_WORDS.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-surface via-ink to-ink pt-24">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-lime/10 rounded-full blur-[100px]" />

      {/* Decorative equalizer-style bars for energy */}
      <div className="absolute bottom-0 inset-x-0 h-24 flex items-end justify-center gap-1.5 opacity-30 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 bg-orange rounded-t-full animate-pulse-bar origin-bottom"
            style={{ height: `${20 + (i % 5) * 12}px`, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-xs text-orange font-bold mb-6 glass px-4 py-2 rounded-full"
          >
            <Flame size={14} /> {BUSINESS.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-cloud leading-[1.05] uppercase"
          >
            Get <br className="hidden sm:block" />
            <TypedText />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-lg text-cloud/70 text-base md:text-lg font-body"
          >
            {BUSINESS.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button href={getWhatsAppLink(`Hi! I'd like to book a free trial at ${BUSINESS.fullName}.`)} variant="primary">Book Free Trial</Button>
            <Button onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })} variant="outline">Our Programs</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              { icon: Dumbbell, text: "Modern equipment" },
              { icon: Award, text: "Certified trainers" },
              { icon: Clock, text: "Open 5AM – 10PM" },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-start gap-1.5">
                <item.icon size={20} className="text-orange" />
                <p className="text-xs text-cloud/60 leading-tight font-body">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80"
            alt="Gym training floor"
            className="rounded-3xl shadow-glass w-full h-[380px] md:h-[460px] object-cover"
            loading="eager"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-glass flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-orange-gradient flex items-center justify-center">
              <Flame size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-cloud font-body">First Class Free</p>
              <p className="text-xs text-cloud/50 font-body">No commitment required</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:flex justify-center absolute bottom-8 left-1/2 -translate-x-1/2 text-cloud/30"
        aria-label="Scroll to programs"
      >
        <ChevronDown size={26} />
      </motion.button>
    </section>
  );
}
