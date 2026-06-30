import { motion } from "framer-motion";

function ProgressBar({
  value,
  total,
  color = "var(--color-copa-green)",
  height = "h-1.5",
  showPercent = true,
}) {
  const percent = total > 0 ? Math.min(100, (value / total) * 100) : 0;
  const roundedPercent = Math.round(percent);

  return (
    <div className="w-full flex items-center gap-2">
      <div
        className={`flex-1 ${height} bg-bg-card rounded-full overflow-hidden`}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      {showPercent && (
        <span className="font-mono text-xs text-text-muted shrink-0 w-9 text-right">
          {roundedPercent}%
        </span>
      )}
    </div>
  );
}

export default ProgressBar;
