import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  metric,
  metricLabel,
  accent = "blue",
}) {
  return (
    <motion.article
      className={`feature-card feature-${accent}`}
      initial={{
        opacity: 0,
        y: 30,
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
        duration: 0.55,
      }}
      whileHover={{
        y: -8,
      }}
    >
      <div className="feature-card-top">
        <div className="feature-icon">
          <Icon size={22} strokeWidth={1.8} />
        </div>

        <ArrowUpRight
          className="feature-arrow"
          size={19}
        />
      </div>

      <div className="feature-card-content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <div className="feature-metric">
        <strong>{metric}</strong>
        <span>{metricLabel}</span>
      </div>

      <div className="feature-glow" />
    </motion.article>
  );
}