import { motion } from "framer-motion";

import FeatureCard from "../ui/FeatureCard";
import SectionHeading from "../ui/SectionHeading";
import { features } from "../data/data";

export default function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <SectionHeading
          eyebrow="Everything connected"
          title={
            <>
              One workspace.
              <br />
              <span>Infinite momentum.</span>
            </>
          }
          description="NOVA connects the tools your team already uses with intelligent automation that keeps work moving."
        />

        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}