import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileHover={
        hover
          ? {
              y: -5,
              transition: {
                duration: 0.25,
              },
            }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}