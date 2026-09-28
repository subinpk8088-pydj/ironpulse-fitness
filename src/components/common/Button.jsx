import { motion } from "framer-motion";

export default function Button({
  children, variant = "primary", onClick, href, type = "button",
  className = "", icon: Icon, disabled = false, ariaLabel,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-body font-bold text-sm tracking-wide uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-orange-gradient text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5",
    outline: "border-2 border-cloud text-cloud hover:bg-cloud hover:text-ink",
    ghost: "text-cloud hover:text-orange",
    lime: "bg-lime-gradient text-ink shadow-soft hover:shadow-lg hover:-translate-y-0.5",
  };

  const content = (<>{Icon && <Icon size={16} />}{children}</>);
  const classes = `${base} ${variants[variant]} ${className}`;
  const motionProps = { whileHover: disabled ? {} : { scale: 1.03 }, whileTap: disabled ? {} : { scale: 0.97 } };

  if (href) {
    return (
      <motion.a {...motionProps} href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} disabled={disabled} className={classes} aria-label={ariaLabel}>
      {content}
    </motion.button>
  );
}
