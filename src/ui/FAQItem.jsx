import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className={`faq-item ${
        isOpen ? "faq-item-open" : ""
      }`}
    >
      <button
        className="faq-question"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>

        <span className="faq-icon">
          <ChevronDown size={19} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer-wrapper"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <div className="faq-answer">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}