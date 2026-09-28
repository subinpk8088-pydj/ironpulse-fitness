import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import { GALLERY } from "../../utils/constants";

export default function Gallery() {
  return (
    <section className="py-24 md:py-28 bg-ink">
      <div className="container-custom">
        <SectionTitle eyebrow="Inside the Gym" title="Our Space" subtitle="A look at our training floor, studio, and equipment." />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.08 }}
              className="group relative rounded-2xl overflow-hidden shadow-glass aspect-square"
            >
              <img src={item.image} alt={item.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-cloud text-sm font-medium font-body">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
