import { useState } from "react";
import { motion } from "framer-motion";

import PricingCard from "../ui/PricingCard";
import SectionHeading from "../ui/SectionHeading";
import { pricingPlans } from "../data/data";

export default function Pricing({ onSelectPlan }) {
  const [billing, setBilling] = useState("monthly");

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <SectionHeading
          eyebrow="Simple pricing"
          title={
            <>
              Start small.
              <br />
              <span>Scale without surprises.</span>
            </>
          }
          description="Choose the plan that fits your team today. Upgrade whenever you're ready."
        />

        <div className="billing-toggle">
          <button
            type="button"
            className={
              billing === "monthly"
                ? "billing-option active"
                : "billing-option"
            }
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            type="button"
            className={
              billing === "annual"
                ? "billing-option active"
                : "billing-option"
            }
            onClick={() => setBilling("annual")}
          >
            Annual
            <span>Save 20%</span>
          </button>
        </div>

        <motion.div
          className="pricing-grid"
          layout
        >
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billing={billing}
              onSelect={onSelectPlan}
            />
          ))}
        </motion.div>

        <p className="pricing-footnote">
          All plans include secure cloud storage, automatic updates,
          and standard support.
        </p>
      </div>
    </section>
  );
}