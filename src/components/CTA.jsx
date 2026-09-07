import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { scrollToSection } from "../utils/scroll";

export default function CTA({ onDemo }) {
  return (
    <section className="cta-section">
      <div className="cta-orb cta-orb-one" />
      <div className="cta-orb cta-orb-two" />
      <div className="cta-grid" />

      <div className="container">
        <motion.div
          className="cta-card"
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="cta-badge">
            <Sparkles size={14} />
            Your next chapter starts here
          </div>

          <h2>
            Ready to build
            <br />
            <span>better?</span>
          </h2>

          <p>
            Join the teams using NOVA to turn ambitious ideas into
            extraordinary work.
          </p>

          <div className="cta-actions">
            <button
              type="button"
              className="cta-primary"
              onClick={() => scrollToSection("pricing")}
            >
              Start building
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="cta-secondary"
              onClick={onDemo}
            >
              Talk to our team
            </button>
          </div>

          <div className="cta-note">
            No credit card required · Set up in minutes
          </div>
        </motion.div>
      </div>
    </section>
  );
}