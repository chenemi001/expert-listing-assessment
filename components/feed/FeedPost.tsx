"use client";

import {
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Avatar from "@/components/ui/Avatar";
import PropertyImage from "@/components/property/PropertyImage";
import { FeedPost as FeedPostType } from "@/types";

type FeedPostProps = {
  post: FeedPostType;
};

export default function FeedPost({ post }: FeedPostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="border-b border-[#e4e4e4] bg-white">
      {/* POST HEADER */}
      <div className="flex items-start gap-3 px-4 py-3">
        <button className="shrink-0 rounded-full transition-transform duration-150 hover:scale-105">
          <Avatar
            src={post.author.avatar}
            alt={post.author.name}
            size={44}
            className={
              post.author.hasStory
                ? "border-[2px] border-[#9edb47] p-[1px]"
                : ""
            }
          />
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-[14px]">
            <span className="cursor-pointer font-medium text-[#1c1c1c] transition-colors hover:text-black hover:underline hover:underline-offset-2">
              {post.author.name}
            </span>

            <span className="text-[#aaa]">•</span>

            <span className="text-[#777]">{post.author.role}</span>
          </div>

          <div className="text-[12px] text-[#777]">
            {post.author.category} • {post.author.time}
          </div>

          {post.author.location && (
            <div className="mt-0.5 text-[11px] text-[#777]">
              ◉ {post.author.location}
            </div>
          )}
        </div>

        <button
          aria-label="More options"
          className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#222] transition-colors duration-150 hover:bg-[#f2f2f2] hover:text-[#555]"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="px-4 pb-3">
        <p className="text-[14px] leading-[1.25] text-[#222]">
          {post.content}
        </p>
      </div>

      {/* PROPERTY IMAGE */}
      {post.image && (
        <PropertyImage
          src={post.image}
          alt={`${post.author.name} property`}
          status={post.propertyStatus}
          type={post.propertyType}
          carousel={post.carousel}
        />
      )}

      {/* LIKED BY */}
      {post.likedBy && (
        <div className="flex items-center gap-2 px-4 py-3">
          {/* AVATAR GROUP */}
          {post.id === "felix-okon" ? (
            <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full">
              <img
                src="/images/avatars/avatar-09.png"
                alt="People who liked this post"
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="relative h-6 w-[54px] shrink-0">
              <img
                src="/images/avatars/avatar-group.png"
                alt="People who liked this post"
                className="absolute left-0 top-0 h-6 w-[54px] object-contain"
              />
            </div>
          )}

          {/* LIKED BY TEXT */}
          <span className="text-[13px] text-[#777]">
            Liked by{" "}
            <span className="font-medium text-[#555]">
              {post.likedBy}
            </span>{" "}
            {post.likesText}
          </span>
        </div>
      )}

      {/* ACTIONS */}
      <div className="flex items-center border-t border-[#ededed] px-4 py-2">
        <div className="flex flex-1 items-center gap-5">
          {/* LIKE */}
          <motion.button
            whileTap={{ scale: 0.7 }}
            whileHover={{ scale: 1.12 }}
            onClick={() => setLiked((value) => !value)}
            aria-label="Like"
            className={`transition-colors duration-150 ${
              liked ? "text-red-500" : "text-[#333] hover:text-red-400"
            }`}
          >
            <Heart
              size={21}
              fill={liked ? "currentColor" : "none"}
              strokeWidth={1.6}
            />
          </motion.button>

          {/* COMMENT */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Comment"
            className="text-[#333] transition-colors duration-150 hover:text-[#4c8f39]"
          >
            <MessageCircle size={21} strokeWidth={1.6} />
          </motion.button>

          {/* SHARE */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1, rotate: -8 }}
            aria-label="Share"
            className="text-[#333] transition-colors duration-150 hover:text-[#4c8f39]"
          >
            <Send size={20} strokeWidth={1.6} />
          </motion.button>

          {/* VIEWS */}
          <span className="text-[13px] text-[#555]">
            {post.stats?.views}
          </span>
        </div>

        {/* SAVE */}
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.12 }}
            onClick={() => setSaved((value) => !value)}
            aria-label="Save"
            className={`transition-colors duration-150 ${
              saved
                ? "text-[#4c8d38]"
                : "text-[#333] hover:text-[#4c8d38]"
            }`}
          >
            <Bookmark
              size={20}
              fill={saved ? "currentColor" : "none"}
              strokeWidth={1.6}
            />
          </motion.button>

          {post.stats?.saves !== undefined && (
            <span className="text-[13px] text-[#555]">
              {post.stats.saves}
            </span>
          )}
        </div>
      </div>

      {/* COMMENT */}
      {post.comment && (
        <div className="px-4 pb-3 text-[13px] leading-[1.35]">
          <span className="font-medium">{post.comment.author}</span>{" "}
          <span className="text-[#444]">{post.comment.text}</span>
        </div>
      )}

      {/* VIEW COMMENTS */}
      {post.commentsText && (
        <button className="px-4 pb-3 text-[13px] text-[#888] transition-colors hover:text-[#555] hover:underline hover:underline-offset-2">
          {post.commentsText}
        </button>
      )}
    </article>
  );
}