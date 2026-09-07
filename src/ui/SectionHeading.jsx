import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  return (
    <motion.div
      className={`section-heading section-heading-${align} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}