"use client";
import { motion } from "framer-motion";

function FadeInAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInAnimation;
