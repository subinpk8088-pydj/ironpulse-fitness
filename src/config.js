// Centralized business configuration — following the VertexFlow template pattern.
// Swap these values (and the Tailwind color tokens in tailwind.config.js) to re-theme
// this template for a different gym / fitness studio client.

export const BUSINESS = {
  name: "IRON PULSE",
  fullName: "Iron Pulse Fitness",
  tagline: "Train Harder, Get Stronger",
  description:
    "Strength training, HIIT, and personal coaching in a space built for real results. Your first class is on us.",
  phone: "+91 94963 13744",
  whatsappNumber: "919496313744",
  email: "hello@ironpulsefitness.com",
  address: "Kannur, Kerala, India",
  hours: "Mon – Sat: 5AM – 10PM",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "programs", label: "Programs" },
  { id: "pricing", label: "Membership" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Reviews" },
  { id: "booking", label: "Free Trial" },
];

export const getWhatsAppLink = (message) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
