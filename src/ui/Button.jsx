import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  icon,
  disabled = false,
}) {
  const buttonClass = [
    "nova-button",
    `nova-button-${variant}`,
    `nova-button-${size}`,
  ].join(" ");

  return (
    <motion.button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      whileHover={
        disabled
          ? {}
          : {
              y: -2,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.97,
            }
      }
    >
      <span className="nova-button-content">
        {children}
      </span>

      {icon || (
        variant === "primary" && (
          <ArrowRight size={16} />
        )
      )}
    </motion.button>
  );
}

