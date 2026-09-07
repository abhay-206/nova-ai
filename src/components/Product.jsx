import { motion } from "framer-motion";
import {
  Check,
  CircleCheck,
  Sparkles,
} from "lucide-react";

import ProductScene from "../components3d/ProductScene";
import SectionHeading from "../ui/SectionHeading";
import { productHighlights } from "../data/data";

export default function Product() {
  return (
    <section id="product" className="section product-section">
      <div className="container">
        <SectionHeading
          eyebrow="The NOVA workspace"
          title={
            <>
              Your entire operation,
              <br />
              <span>intelligently connected.</span>
            </>
          }
          description="See everything that matters, understand what is changing, and let NOVA handle the busywork."
        />

        <div className="product-layout">
          <motion.div
            className="product-visual"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
            }}
          >
            <ProductScene />

            <div className="product-visual-glow" />
          </motion.div>

          <motion.div
            className="product-content"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
            }}
          >
            <div className="product-mini-label">
              <Sparkles size={14} />
              Intelligence built in
            </div>

            <h3>
              A workspace that
              <span> thinks ahead.</span>
            </h3>

            <p>
              NOVA understands your projects, priorities, and patterns
              so your team can spend less time managing work and more
              time creating it.
            </p>

            <div className="product-highlights">
              {productHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="product-highlight"
                    key={item.title}
                  >
                    <div className="product-highlight-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>

                    <CircleCheck
                      className="product-highlight-check"
                      size={18}
                    />
                  </div>
                );
              })}
            </div>

            <div className="product-proof">
              <Check size={15} />
              No complex setup
              <span />
              <Check size={15} />
              Works with your existing workflow
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}