"use client";

import { Image as ImageIcon } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import { motion } from "framer-motion";

export default function Composer() {
  return (
    <div className="border-b border-[#e7e7e7] bg-white px-5 pb-3">
      <motion.button
        whileTap={{ scale: 0.99 }}
        className="group flex w-full items-center gap-3 rounded-2xl bg-[#f7f7f7] px-2 py-2 text-left ring-1 ring-transparent transition-all duration-150 hover:bg-[#f3f3f3] hover:ring-[#e2e2e2] focus-visible:outline-none focus-visible:ring-[#4c8f39]"
      >
        <Avatar
          src="/images/avatars/avatar-me.png"
          alt="Your profile"
          size={38}
        />

        <span className="flex-1 truncate text-[14px] text-[#858585] transition-colors group-hover:text-[#666]">
          Share a property, request or say something...
        </span>

        <ImageIcon
          size={19}
          className="mr-2 text-[#858585] transition-colors group-hover:text-[#4c8f39]"
          strokeWidth={1.7}
        />
      </motion.button>
    </div>
  );
}