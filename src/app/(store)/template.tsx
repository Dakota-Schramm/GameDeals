'use client'

import { motion, AnimatePresence } from "framer-motion"

/**
 * 
 * @remarks This is required to be client component because of context
 * @returns 
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 1500 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
