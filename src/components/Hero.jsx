import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

import HeroScene from "../components3d/HeroScene";
import Button from "../ui/Button";
import { heroMetrics } from "../data/data";
import { scrollToSection } from "../utils/scroll";

export default function Hero({ onDemo }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-gradient hero-gradient-one" />
        <div className="hero-gradient hero-gradient-two" />
      </div>

      <HeroScene />

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-eyebrow-icon">
              <Sparkles size={14} />
            </span>
            AI-powered productivity platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.08,
            }}
          >
            Build Better.
            <br />
            <span>Work Smarter.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.16,
            }}
          >
            NOVA brings your people, projects, and AI into one
            intelligent workspace built to help ambitious teams move
            faster.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.24,
            }}
          >
            <Button onClick={() => scrollToSection("pricing")}>
              Start building
            </Button>

            <Button
              variant="secondary"
              icon={<Play size={15} fill="currentColor" />}
              onClick={onDemo}
            >
              Watch demo
            </Button>
          </motion.div>

          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.32,
            }}
          >
            {heroMetrics.map((metric) => (
              <div className="hero-metric" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.button
          className="hero-scroll-indicator"
          type="button"
          onClick={() => scrollToSection("features")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label="Scroll to features"
        >
          <span>Scroll to explore</span>
          <span className="scroll-line">
            <span />
          </span>
          <ArrowRight size={14} />
        </motion.button>
      </div>
    </section>
  );
}