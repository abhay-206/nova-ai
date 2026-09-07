import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../data/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex(
      (current) => (current + 1) % testimonials.length
    );
  };

  const previous = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  };

  useEffect(() => {
    const timer = window.setInterval(next, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="section testimonials-section">
      <div className="container">
        <SectionHeading
          eyebrow="What teams say"
          title={
            <>
              Less busywork.
              <br />
              <span>More breakthrough moments.</span>
            </>
          }
          description="Thousands of teams use NOVA to turn ambitious ideas into meaningful progress."
        />

        <div className="testimonial-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="testimonial-slide"
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-controls">
            <div className="testimonial-dots">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={
                    index === activeIndex
                      ? "testimonial-dot active"
                      : "testimonial-dot"
                  }
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="testimonial-arrows">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}