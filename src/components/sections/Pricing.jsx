import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { PRICING_PLANS } from "../../utils/constants";
import { formatPrice } from "../../utils/helpers";
import { getWhatsAppLink } from "../../config";

export default function Pricing() {
  return (
    <section className="py-24 md:py-28 bg-surface">
      <div className="container-custom">
        <SectionTitle eyebrow="Membership Plans" title="Choose Your Plan" subtitle="Transparent monthly pricing. Cancel or upgrade any time." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl overflow-hidden glass flex flex-col ${plan.isPopular ? "ring-2 ring-orange shadow-soft" : "shadow-glass"}`}
            >
              {plan.isPopular && (
                <div className="bg-orange-gradient text-white text-center text-xs uppercase tracking-widest font-bold py-2 flex items-center justify-center gap-1.5">
                  <Crown size={13} /> Most Popular
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-cloud mb-1 uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="font-display text-4xl text-orange">{formatPrice(plan.price)}</span>
                  <span className="text-sm text-cloud/50 font-body">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-cloud/70 font-body">
                      <Check size={16} className="text-lime mt-0.5 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppLink(`Hi! I'd like to sign up for the ${plan.name} membership (${formatPrice(plan.price)} ${plan.period}).`)}
                  target="_blank" rel="noopener noreferrer"
                  className={`text-center text-sm uppercase tracking-wide font-bold px-5 py-3 rounded-full transition-all font-body ${
                    plan.isPopular ? "bg-orange-gradient text-white shadow-soft hover:shadow-lg" : "border-2 border-cloud text-cloud hover:bg-cloud hover:text-ink"
                  }`}
                >
                  Choose {plan.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
