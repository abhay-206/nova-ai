import {
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function PricingCard({
  plan,
  billing = "monthly",
  onSelect,
}) {
  const isEnterprise = plan.id === "enterprise";

  const price =
    billing === "annual"
      ? plan.annualPrice
      : plan.monthlyPrice;

  return (
    <motion.article
      className={`pricing-card ${
        plan.popular ? "pricing-popular" : ""
      }`}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      {plan.popular && (
        <div className="popular-badge">
          <Sparkles size={13} />
          Most Popular
        </div>
      )}

      <div className="pricing-header">
        <h3>{plan.name}</h3>

        <p>{plan.description}</p>
      </div>

      <div className="pricing-price">
        {isEnterprise ? (
          <>
            <strong>Custom</strong>
            <span>tailored to your team</span>
          </>
        ) : (
          <>
            <span className="currency">$</span>

            <strong>{price}</strong>

            <span className="price-period">
              / month
            </span>
          </>
        )}
      </div>

      {!isEnterprise && billing === "annual" && (
        <div className="billing-note">
          Billed annually
        </div>
      )}

      <button
        className={`pricing-button ${
          plan.popular
            ? "pricing-button-primary"
            : "pricing-button-secondary"
        }`}
        onClick={() => onSelect?.(plan)}
      >
        {plan.cta}
        <ArrowRight size={16} />
      </button>

      <div className="pricing-divider" />

      <p className="includes-label">
        Everything included:
      </p>

      <ul className="pricing-features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className="check-icon">
              <Check size={13} />
            </span>

            {feature}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}