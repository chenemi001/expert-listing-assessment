"use client";

import { SlidersHorizontal, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function FeedFilters() {
  return (
    <div className="flex gap-3 overflow-x-auto bg-white px-5 pb-4 pt-1">
      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -1 }}
        className="flex h-9 shrink-0 items-center gap-2 rounded-full border border-[#ededed] px-4 text-[13px] text-[#333] transition-colors duration-150 hover:border-[#d8d8d8] hover:bg-gray-50"
      >
        <SlidersHorizontal size={15} />
        Filters
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -1 }}
        className="flex h-9 shrink-0 items-center gap-2 rounded-full border border-[#ededed] px-4 text-[13px] text-[#333] transition-colors duration-150 hover:border-[#d8d8d8] hover:bg-gray-50"
      >
        <TrendingUp size={15} className="text-[#548d36]" />
        Trending Searches
      </motion.button>
    </div>
  );
}