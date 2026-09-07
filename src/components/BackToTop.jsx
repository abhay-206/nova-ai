import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

import useScrollPosition from "../hooks/useScrollPosition";
import { scrollToTop } from "../utils/scroll";

export default function BackToTop() {
  const scrollY = useScrollPosition();

  const visible = scrollY > 650;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 15,
          }}
          transition={{
            duration: 0.2,
          }}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}