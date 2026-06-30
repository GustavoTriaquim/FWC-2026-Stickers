import { motion } from "framer-motion";

function EmptyState({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="flex flex-col items-center justify-center gap-4 mt-16 px-4 text-center"
    >
      <div className="w-20 h-20 rounded-full border-2 border-dashed border-border-subtle bg-bg-slot flex items-center justify-center">
        <svg
          className="w-8 h-8 text-text-dim"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect
            x="3"
            y="3"
            width="11"
            height="11"
            rx="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 14v3a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>
        <p className="text-text-primary text-sm font-medium">{title}</p>
        {subtitle && <p className="text-text-muted text-xs mt-1">{subtitle}</p>}
      </div>
    </motion.div>
  );
}

export default EmptyState;
