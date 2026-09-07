import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionHeading from "../ui/SectionHeading";
import { howItWorksSteps } from "../data/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how-section">
      <div className="container">
        <SectionHeading
          eyebrow="Simple by design"
          title={
            <>
              From chaos to clarity
              <br />
              <span>in four moves.</span>
            </>
          }
          description="NOVA stays out of your way until it has something useful to do."
        />

        <div className="how-grid">
          <div className="how-line" />

          {howItWorksSteps.map((step, index) => (
            <motion.article
              className="how-step"
              key={step.number}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <div className="how-number">
                {step.number}
              </div>

              <div className="how-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {index < howItWorksSteps.length - 1 && (
                <ArrowRight className="how-arrow" size={18} />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}