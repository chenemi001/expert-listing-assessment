"use client";

import {
  Bell,
  Bookmark,
  Home,
  UserRound,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Feed",
    icon: Wifi,
    beta: true,
  },
  {
    label: "Wishlist",
    icon: Bookmark,
  },
  {
    label: "Notification",
    icon: Bell,
  },
  {
    label: "Profile",
    icon: UserRound,
  },
];

export default function BottomNav() {
  const [active, setActive] = useState("Feed");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#dedede] bg-white px-3 pb-[max(7px,env(safe-area-inset-bottom))] pt-2 md:hidden">
      <div className="mx-auto flex max-w-md items-end justify-between">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <motion.button
              key={item.label}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActive(item.label)}
              className="relative flex min-w-[55px] flex-col items-center gap-1 text-[10px]"
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2 : 1.5}
                className={
                  isActive ? "text-[#4c8f39]" : "text-[#333]"
                }
              />

              <span
                className={
                  isActive ? "text-[#4c8f39]" : "text-[#444]"
                }
              >
                {item.label}
              </span>

              {item.beta && (
                <span className="absolute -right-1 top-[-2px] rounded-full bg-[#a9df62] px-1 text-[7px] font-medium text-[#285c20]">
                  Beta
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}