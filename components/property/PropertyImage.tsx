"use client";

import Image from "next/image";
import { Bookmark, Play, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

type PropertyImageProps = {
  src: string;
  alt: string;
  status?: "For Rent" | "For Sale";
  type?: "image" | "video";
  carousel?: boolean;
};

export default function PropertyImage({
  src,
  alt,
  status,
  type = "image",
  carousel = false,
}: PropertyImageProps) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group relative overflow-hidden bg-[#eee]">
      <Image
        src={src}
        alt={alt}
        width={900}
        height={700}
        className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        priority
      />

      {status && (
        <motion.button
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.04 }}
          className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#111]/90 px-3 py-1.5 text-[13px] font-medium text-white backdrop-blur-sm transition-colors duration-150 hover:bg-black"
        >
          <Tag size={13} />
          {status}
        </motion.button>
      )}

      {carousel && (
        <div className="absolute right-3 top-3 rounded-full bg-[#111]/80 px-2 py-1 text-[11px] font-medium text-white">
          1/4
        </div>
      )}

      {type === "video" && (
        <>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm"
          >
            <Play size={23} fill="currentColor" />
          </motion.button>

          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/85 px-2.5 py-1 text-[11px] text-white">
            <Play size={10} fill="currentColor" />
            0:20
          </div>
        </>
      )}

      {carousel && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#79a63a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </div>
      )}

      <motion.button
        whileTap={{ scale: 0.88 }}
        whileHover={{ scale: 1.08 }}
        onClick={() => setSaved((value) => !value)}
        aria-label="Save property"
        className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-colors duration-150 hover:bg-white ${
          saved ? "text-[#508f38]" : "text-[#333]"
        }`}
      >
        <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
      </motion.button>
    </div>
  );
}