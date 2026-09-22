"use client";

import { Bell, Bookmark, Home, Mail, Plus, UserRound, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Avatar from "@/components/ui/Avatar";

const items = [
  { label: "Home", icon: Home },
  { label: "Feed", icon: Wifi, beta: true },
  { label: "Wishlist", icon: Bookmark },
  { label: "Notification", icon: Bell },
];

export default function DesktopHeader() {
  const [active, setActive] = useState("Feed");

  return (
    <header className="sticky top-0 z-50 hidden border-b border-[#e8e8e8] bg-white/95 backdrop-blur md:block">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-2 px-4 lg:gap-6 lg:px-10">
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center text-[#075f4b]">
            <span className="text-[26px] font-bold">✣</span>
          </div>
          <h1 className="hidden text-[20px] font-semibold tracking-[-0.5px] text-[#075f4b] lg:block">
            Expert Listing
          </h1>
        </div>

        <nav className="flex flex-1 items-center justify-center gap-0.5 lg:gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.label;

            return (
              <motion.button
                key={item.label}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(item.label)}
                className="group relative flex flex-col items-center gap-1 rounded-xl px-2.5 py-2 transition-colors hover:bg-[#f5f7f4] lg:px-6"
              >
                <span className="relative flex items-center gap-2">
                  <Icon
                    size={19}
                    strokeWidth={isActive ? 2 : 1.6}
                    className={`transition-colors ${
                      isActive
                        ? "text-[#4c8f39]"
                        : "text-[#555] group-hover:text-[#333]"
                    }`}
                  />
                  <span
                    className={`hidden text-[13px] transition-colors lg:inline ${
                      isActive
                        ? "font-medium text-[#4c8f39]"
                        : "text-[#555] group-hover:text-[#333]"
                    }`}
                  >
                    {item.label}
                  </span>

                  {item.beta && (
                    <span className="hidden rounded-full bg-[#a9df62] px-1.5 py-[1px] text-[9px] font-medium text-[#285c20] lg:inline">
                      Beta
                    </span>
                  )}
                </span>

                <span
                  className={`h-[2px] w-5 rounded-full transition-all duration-200 ${
                    isActive ? "bg-[#4c8f39] opacity-100" : "opacity-0"
                  }`}
                />
              </motion.button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Messages"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ededed] text-[#333] transition-colors hover:border-[#dcdcdc] hover:bg-gray-50"
          >
            <Mail size={19} strokeWidth={1.7} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Create"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ededed] text-[#333] transition-colors hover:border-[#dcdcdc] hover:bg-gray-50"
          >
            <Plus size={20} strokeWidth={1.7} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActive("Profile")}
            aria-label="Profile"
            className={`rounded-full transition-shadow ${
              active === "Profile"
                ? "ring-2 ring-[#4c8f39] ring-offset-2"
                : "ring-1 ring-transparent hover:ring-[#ddd] hover:ring-offset-2"
            }`}
          >
            {active === "Profile" ? (
              <Avatar src="/images/avatars/avatar-09.png" alt="Your profile" size={36} />
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f5] text-[#555]">
                <UserRound size={18} strokeWidth={1.7} />
              </span>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
