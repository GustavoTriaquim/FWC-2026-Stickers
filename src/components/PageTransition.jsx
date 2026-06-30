import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
