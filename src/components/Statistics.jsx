import { motion } from "framer-motion";

import useCountUp from "../hooks/useCountUp";
import useIntersection from "../hooks/useIntersection";
import { statistics } from "../data/data";

function StatisticItem({ statistic }) {
  const { ref, isVisible } = useIntersection({
    threshold: 0.3,
  });

  const value = useCountUp(
    statistic.value,
    1500,
    statistic.decimals || 0,
    isVisible
  );

  const displayValue =
    statistic.decimals > 0
      ? value.toFixed(statistic.decimals)
      : value.toLocaleString();

  return (
    <motion.div
      ref={ref}
      className="statistic-item"
      initial={{
        opacity: 0,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.55,
      }}
    >
      <strong>
        {displayValue}
        {statistic.suffix}
      </strong>

      <span>{statistic.label}</span>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="statistics-section">
      <div className="container">
        <div className="statistics-grid">
          {statistics.map((statistic) => (
            <StatisticItem
              key={statistic.label}
              statistic={statistic}
            />
          ))}
        </div>
      </div>
    </section>
  );
}