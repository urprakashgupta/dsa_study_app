import React from "react";
import { motion } from "framer-motion";

const SortBar = ({ value }) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: value * 4 }} // Scale height based on value
      transition={{ type: "spring", stiffness: 100 }}
      className="w-8 bg-blue-500 rounded"
    >
      <div className="text-center text-white text-sm mt-2">{value}</div>
    </motion.div>
  );
};

export default SortBar;
