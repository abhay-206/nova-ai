import { useState } from "react";
import { motion } from "framer-motion";

import FAQItem from "../ui/FAQItem";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "../data/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? -1 : index
    );
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-container">
        <SectionHeading
          eyebrow="Questions, answered"
          title={
            <>
              Everything you need
              <br />
              <span>to know about NOVA.</span>
            </>
          }
          description="Still curious? Our team is always happy to help."
        />

        <motion.div
          className="faq-list"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}