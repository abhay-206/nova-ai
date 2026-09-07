import { motion } from "framer-motion";

import { trustedCompanies } from "../data/data";

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="container">
        <motion.p
          className="trusted-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by forward-thinking teams
        </motion.p>

        <div className="trusted-logos">
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company}
              className="trusted-logo"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.45,
              }}
            >
              <span className="trusted-logo-symbol">
                {company.charAt(0)}
              </span>
              <span>{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}