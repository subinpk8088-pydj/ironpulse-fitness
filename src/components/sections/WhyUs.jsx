import { motion } from "framer-motion";
import { Award, Dumbbell, Clock, Users } from "lucide-react";
import { WHY_US } from "../../utils/constants";
import { staggerContainer, fadeUp } from "../../utils/animations";

const ICONS = { Award, Dumbbell, Clock, Users };

export default function WhyUs() {
  return (
    <section className="py-24 md:py-28 bg-orange-gradient text-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mx-auto max-w-2xl mb-12 md:mb-16">
          <motion.span custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-3 text-white/80">
            Why Choose Us
          </motion.span>
          <motion.h2 custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-white uppercase">
            Built Different
          </motion.h2>
        </div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_US.map((item) => {
            const Icon = ICONS[item.icon] || Award;
            return (
              <motion.div key={item.title} variants={fadeUp} className="glass-light rounded-2xl p-7 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-white/15 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-lg mb-2 uppercase">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed font-body">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
