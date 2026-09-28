// Content data for IRON PULSE FITNESS

export const PROGRAMS = [
  {
    id: 1,
    name: "Strength Training",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    description: "Build raw strength with progressive overload programming, free weights, and machine circuits.",
    duration: "60 mins",
  },
  {
    id: 2,
    name: "HIIT Bootcamp",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
    description: "High-intensity interval training that torches calories and builds explosive conditioning fast.",
    duration: "45 mins",
  },
  {
    id: 3,
    name: "CrossFit",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?w=800&q=80",
    description: "Functional movements at high intensity — Olympic lifts, gymnastics, and metabolic conditioning.",
    duration: "60 mins",
  },
  {
    id: 4,
    name: "Personal Training",
    icon: "UserCheck",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    description: "One-on-one coaching tailored to your goals, with a customized plan and progress tracking.",
    duration: "60 mins",
  },
  {
    id: 5,
    name: "Yoga & Mobility",
    icon: "Wind",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    description: "Improve flexibility, recovery, and mental focus with guided yoga and mobility sessions.",
    duration: "50 mins",
  },
  {
    id: 6,
    name: "Cardio Circuit",
    icon: "HeartPulse",
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800&q=80",
    description: "Treadmill, rowing, and bike intervals designed to boost endurance and heart health.",
    duration: "40 mins",
  },
];

export const PRICING_PLANS = [
  {
    id: 1,
    name: "Basic",
    price: 1499,
    period: "per month",
    features: ["Gym floor access", "Standard equipment", "Locker room access", "1 free guest pass/month"],
    isPopular: false,
  },
  {
    id: 2,
    name: "Pro",
    price: 2499,
    period: "per month",
    features: ["Everything in Basic", "Unlimited group classes", "Nutrition consultation", "Progress tracking app", "2 free guest passes/month"],
    isPopular: true,
  },
  {
    id: 3,
    name: "Elite",
    price: 4999,
    period: "per month",
    features: ["Everything in Pro", "4 personal training sessions", "Custom meal plan", "Priority class booking", "Recovery room access"],
    isPopular: false,
  },
];

export const GALLERY = [
  { id: 1, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", caption: "Free weights area" },
  { id: 2, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", caption: "Personal training session" },
  { id: 3, image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80", caption: "HIIT bootcamp class" },
  { id: 4, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80", caption: "Strength training floor" },
  { id: 5, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80", caption: "Yoga & mobility studio" },
  { id: 6, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80", caption: "Cardio zone" },
];

export const TESTIMONIALS = [
  { id: 1, name: "Nithin George", role: "Member, 8 months", image: "https://i.pravatar.cc/150?img=13", quote: "Lost 12kg in 6 months with the Elite plan. My trainer actually adjusts the program every few weeks based on progress.", rating: 5, date: "2026-06-08" },
  { id: 2, name: "Anagha Pillai", role: "Member, 1 year", image: "https://i.pravatar.cc/150?img=25", quote: "The HIIT bootcamp classes are intense but the coaches make sure your form is right before pushing pace.", rating: 5, date: "2026-05-16" },
  { id: 3, name: "Sarath Chandran", role: "Member, 3 months", image: "https://i.pravatar.cc/150?img=6", quote: "Clean equipment, never overcrowded, and the free trial convinced me to sign up on the spot.", rating: 4.5, date: "2026-04-02" },
];

export const WHY_US = [
  { icon: "Award", title: "Certified Trainers", text: "Every coach is certified and trained in injury-safe technique and progressive programming." },
  { icon: "Dumbbell", title: "Modern Equipment", text: "Commercial-grade machines and free weights, maintained and upgraded regularly." },
  { icon: "Clock", title: "Flexible Hours", text: "Open early and late so training fits your schedule, not the other way around." },
  { icon: "Users", title: "Real Community", text: "A motivating, judgment-free environment where members push each other forward." },
];
