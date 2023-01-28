import React from "react";
import { motion } from "framer-motion";

function LinkItem({ onRemove, link, index }) {
  return (
    <section className="flex items-center h-16 gap-1 mt-2">
      <motion.a
        href={link.link}
        className="p-2 flex justify-between items-center bg-slate-900 text-slate-100 rounded-3xl flex-1 h-10"
        key={link.link}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -100 }}
        exit={{ y: 500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {link.linkTitle}
      </motion.a>

      <motion.button
        className="bg-slate-900 h-10 rounded-3xl text-slate-100 text-sm px-1"
        onClick={() => onRemove(index)}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        exit={{ x: -50 }}
      >
        Remove
      </motion.button>
    </section>
  );
}

export default LinkItem;
