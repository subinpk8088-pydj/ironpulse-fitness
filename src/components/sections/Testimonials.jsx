import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { TESTIMONIALS } from "../../utils/constants";
import { staggerContainer, fadeUp } from "../../utils/animations";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-28 bg-surface">
      <div className="container-custom">
        <SectionTitle eyebrow="Member Stories" title="Real Results" subtitle="Hear from members who've transformed their fitness with us." />
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.id} variants={fadeUp} className="glass rounded-2xl p-7 shadow-glass relative">
              <Quote className="text-orange/40 mb-3" size={28} />
              <p className="text-cloud/80 italic mb-5 leading-relaxed text-sm font-body">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-bold text-cloud text-sm font-body">{t.name}</p>
                  <p className="text-xs text-cloud/50 font-body">{t.role}</p>
                </div>
                <div className="ml-auto flex text-lime">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill={i < Math.round(t.rating) ? "currentColor" : "none"} />)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
