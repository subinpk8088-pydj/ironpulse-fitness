import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment} max-w-2xl mb-12 md:mb-16`}>
      {eyebrow && (
        <motion.span custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-3 text-orange">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight gradient-text uppercase">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-4 text-base md:text-lg font-normal text-cloud/70 font-body">
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
