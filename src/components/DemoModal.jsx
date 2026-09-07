import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

export default function DemoModal({
  open,
  onClose,
  selectedPlan,
}) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
    }
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="demo-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="demo-modal"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
          >
            <button
              type="button"
              className="demo-modal-close"
              onClick={onClose}
              aria-label="Close demo modal"
            >
              <X size={19} />
            </button>

            {!submitted ? (
              <>
                <div className="demo-modal-icon">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="demo-modal-header">
                  <span>See NOVA in action</span>

                  <h2 id="demo-modal-title">
                    Let's build
                    <br />
                    something <em>better.</em>
                  </h2>

                  <p>
                    Tell us a little about yourself and we'll
                    arrange a personalized NOVA demo.
                  </p>
                </div>

                {selectedPlan && (
                  <div className="selected-plan-note">
                    Interested in{" "}
                    <strong>{selectedPlan.name}</strong>
                  </div>
                )}

                <form
                  className="demo-form"
                  onSubmit={handleSubmit}
                >
                  <div className="demo-form-row">
                    <label>
                      First name
                      <input
                        type="text"
                        placeholder="Abhay"
                        required
                      />
                    </label>

                    <label>
                      Last name
                      <input
                        type="text"
                        placeholder="Rawat"
                        required
                      />
                    </label>
                  </div>

                  <label>
                    Work email
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                  <label>
                    Company
                    <input
                      type="text"
                      placeholder="Your company"
                    />
                  </label>

                  <button
                    className="demo-submit"
                    type="submit"
                  >
                    Request my demo
                    <ArrowRight size={17} />
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                className="demo-success"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
              >
                <div className="demo-success-icon">
                  <CheckCircle2 size={38} />
                </div>

                <h2>You're on the list.</h2>

                <p>
                  Thanks for your interest in NOVA. We'll be in touch
                  soon to arrange your demo.
                </p>

                <button
                  type="button"
                  className="demo-success-button"
                  onClick={onClose}
                >
                  Done
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}