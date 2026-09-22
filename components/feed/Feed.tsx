import { feedPosts } from "@/data/mockData";
import FeedPost from "./FeedPost";

export default function Feed() {
  return (
    <main>
      {feedPosts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}

      <div className="flex h-14 items-center justify-center bg-[#eeeeee] text-[12px] text-[#777]">
        You’re all caught up
      </div>
    </main>
  );
}