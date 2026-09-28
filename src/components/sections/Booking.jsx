import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Dumbbell, User, Phone, Send, CheckCircle2, MessageCircle } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { PROGRAMS } from "../../utils/constants";
import { getWhatsAppLink, BUSINESS } from "../../config";

const TIME_SLOTS = ["6:00 AM", "8:00 AM", "10:00 AM", "4:00 PM", "6:00 PM", "8:00 PM"];

const initialForm = { name: "", phone: "", program: "", goal: "", date: "", time: "" };

export default function Booking({ onToast }) {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const minDate = new Date().toISOString().split("T")[0];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setConfirmed(true);
      setSubmitting(false);
      onToast?.("Trial request received! We'll confirm your slot shortly.");
    }, 800);
  };

  const handleWhatsAppConfirm = () => {
    const msg = `Hi! I'd like to book a free trial:\nProgram: ${form.program}\nGoal: ${form.goal}\nDate: ${form.date}\nTime: ${form.time}\nName: ${form.name}\nPhone: ${form.phone}`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <section className="py-24 md:py-28 bg-ink">
      <div className="container-custom">
        <SectionTitle eyebrow="Start Today" title="Book Your Free Trial" subtitle="One free class, no commitment. See what training here actually feels like." />

        {confirmed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-10 text-center shadow-glass max-w-lg mx-auto"
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.15 }}
              className="w-16 h-16 rounded-full bg-orange-gradient mx-auto mb-5 flex items-center justify-center">
              <CheckCircle2 size={32} className="text-white" />
            </motion.div>
            <h3 className="font-display text-2xl mb-2 text-cloud uppercase">Trial Booked!</h3>
            <p className="text-cloud/60 mb-6 text-sm font-body">
              We've noted your request for <strong>{form.program}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong>.
              Our team will confirm shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleWhatsAppConfirm} variant="primary" icon={MessageCircle}>Confirm via WhatsApp</Button>
              <Button onClick={() => { setForm(initialForm); setConfirmed(false); }} variant="outline">Book Another</Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass rounded-3xl p-6 sm:p-8 shadow-glass max-w-2xl mx-auto space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="flex items-center gap-1.5 text-sm font-medium text-cloud/70 mb-1.5 font-body"><User size={14} /> Full Name</label>
                <input id="name" name="name" required value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-cloud/15 focus:border-orange focus:outline-none text-sm text-cloud font-body" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="flex items-center gap-1.5 text-sm font-medium text-cloud/70 mb-1.5 font-body"><Phone size={14} /> Phone Number</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-cloud/15 focus:border-orange focus:outline-none text-sm text-cloud font-body" placeholder="+91 00000 00000" />
              </div>
            </div>

            <div>
              <label htmlFor="program" className="flex items-center gap-1.5 text-sm font-medium text-cloud/70 mb-1.5 font-body"><Dumbbell size={14} /> Select Program</label>
              <select id="program" name="program" required value={form.program} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-cloud/15 focus:border-orange focus:outline-none text-sm text-cloud font-body">
                <option value="" disabled>Choose a program...</option>
                {PROGRAMS.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="goal" className="text-sm font-medium text-cloud/70 mb-1.5 block font-body">Your Fitness Goal (optional)</label>
              <input id="goal" name="goal" value={form.goal} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-cloud/15 focus:border-orange focus:outline-none text-sm text-cloud font-body" placeholder="e.g. Weight loss, muscle gain, general fitness" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="date" className="flex items-center gap-1.5 text-sm font-medium text-cloud/70 mb-1.5 font-body"><Calendar size={14} /> Date</label>
                <input id="date" name="date" type="date" required min={minDate} value={form.date} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-cloud/15 focus:border-orange focus:outline-none text-sm text-cloud font-body" />
              </div>
              <div>
                <label htmlFor="time" className="flex items-center gap-1.5 text-sm font-medium text-cloud/70 mb-1.5 font-body"><Clock size={14} /> Time</label>
                <select id="time" name="time" required value={form.time} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-cloud/15 focus:border-orange focus:outline-none text-sm text-cloud font-body">
                  <option value="" disabled>Select time...</option>
                  {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <Button type="submit" variant="primary" icon={Send} disabled={submitting} className="w-full">
              {submitting ? "Submitting..." : "Book My Free Trial"}
            </Button>
            <p className="text-xs text-cloud/40 text-center font-body">
              Or call us directly at {BUSINESS.phone} — we're open {BUSINESS.hours}.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
