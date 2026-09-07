import { motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";
import SolutionCard from "../ui/SolutionCard";
import { solutions } from "../data/data";

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <SectionHeading
          eyebrow="Built for every team"
          title={
            <>
              One AI workspace.
              <br />
              <span>Every kind of ambition.</span>
            </>
          }
          description="Whether you're launching your first product or scaling a global organization, NOVA adapts to the way you work."
        />

        <motion.div
          className="solutions-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {solutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              {...solution}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}