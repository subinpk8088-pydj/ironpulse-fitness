import { motion } from "framer-motion";
import { Dumbbell, Flame, Zap, UserCheck, Wind, HeartPulse, ArrowRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { PROGRAMS } from "../../utils/constants";
import { getWhatsAppLink } from "../../config";

const ICONS = { Dumbbell, Flame, Zap, UserCheck, Wind, HeartPulse };

export default function Programs() {
  return (
    <section className="py-24 md:py-28 bg-ink">
      <div className="container-custom">
        <SectionTitle eyebrow="Train Your Way" title="Our Programs" subtitle="From strength to conditioning to recovery — a program for every goal." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => {
            const Icon = ICONS[program.icon] || Dumbbell;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden glass shadow-glass hover:shadow-soft transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={program.image} alt={program.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-full glass flex items-center justify-center">
                    <Icon size={18} className="text-orange" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg text-cloud uppercase">{program.name}</h3>
                    <span className="text-xs text-cloud/40 font-body">{program.duration}</span>
                  </div>
                  <p className="text-sm text-cloud/60 mb-4 line-clamp-2 font-body">{program.description}</p>
                  <a
                    href={getWhatsAppLink(`Hi! I'd like to know more about ${program.name}.`)}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-orange hover:text-lime transition-colors font-body"
                  >
                    Join This Class <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
