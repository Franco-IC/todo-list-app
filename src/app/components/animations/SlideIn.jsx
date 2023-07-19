"use client";
import { motion } from "framer-motion";

function SlideAnimation({ children }) {
  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ y: 25, opacity: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default SlideAnimation;
