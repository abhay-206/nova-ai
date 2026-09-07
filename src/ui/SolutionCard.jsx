import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.article
      className="solution-card"
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -7,
      }}
    >
      <div className="solution-icon">
        <Icon size={21} />
      </div>

      <div className="solution-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <button
        className="solution-link"
        aria-label={`Learn more about NOVA for ${title}`}
      >
        <ArrowUpRight size={17} />
      </button>
    </motion.article>
  );
}