import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  initials,
}) {
  return (
    <motion.article
      className="testimonial-card"
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.45,
      }}
    >
      <div className="testimonial-quote-icon">
        <Quote size={20} />
      </div>

      <div className="testimonial-stars" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={15}
            fill="currentColor"
          />
        ))}
      </div>

      <blockquote>
        “{quote}”
      </blockquote>

      <div className="testimonial-author">
        <div className="author-avatar">
          {initials}
        </div>

        <div>
          <strong>{name}</strong>
          <span>
            {role} · {company}
          </span>
        </div>
      </div>
    </motion.article>
  );
}