"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Story } from "@/types";

type StoryItemProps = {
  story: Story;
};

export default function StoryItem({ story }: StoryItemProps) {
  const hasStoryRing = story.type !== "add";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      className="flex w-fit min-w-[72px] shrink-0 flex-col items-center gap-1.5 px-1"
      aria-label={`View ${story.name}`}
    >
      {/* Avatar / Logo */}
      <div
        className={`relative h-[62px] w-[62px] shrink-0 rounded-full ${
          hasStoryRing
            ? "border-[2.5px] border-[#9edb47] p-[2px]"
            : ""
        }`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
          <Image
            src={story.image}
            alt={story.name}
            fill
            sizes="62px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <span className="whitespace-nowrap px-0.5 text-center text-[12px] leading-[15px] text-[#333]">
        {story.name}
      </span>
    </motion.button>
  );
}