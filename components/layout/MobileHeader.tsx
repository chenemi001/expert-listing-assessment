"use client";

import { Mail, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileHeader() {
  return (
    <header className="border-b border-[#e8e8e8] bg-white md:hidden">
      <div className="flex h-[76px] items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center text-[#075f4b]">
            <span className="text-[24px] font-bold">✣</span>
          </div>

          <h1 className="text-[20px] font-semibold tracking-[-0.5px] text-[#075f4b]">
            Expert Listing
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.04 }}
            aria-label="Messages"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ededed] transition-colors hover:bg-gray-50"
          >
            <Mail size={20} strokeWidth={1.7} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.04 }}
            aria-label="Create"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ededed] transition-colors hover:bg-gray-50"
          >
            <Plus size={22} strokeWidth={1.7} />
          </motion.button>
        </div>
      </div>
    </header>
  );
}