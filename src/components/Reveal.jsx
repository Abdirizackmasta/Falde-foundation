import { motion, useReducedMotion } from "framer-motion";

/**
 * Small fade-up-on-scroll wrapper. Plays once, and does nothing for people
 * who prefer reduced motion.
 */
function Reveal({ children, delay = 0, y = 28, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
