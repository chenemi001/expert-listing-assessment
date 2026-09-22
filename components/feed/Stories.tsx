import { stories } from "@/data/mockData";
import StoryItem from "./StoryItem";

export default function Stories() {
  return (
    <section className="bg-white px-4 pb-3 pt-3">
      <div className="scrollbar-none flex items-start gap-[14px] overflow-x-auto">
        {stories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}