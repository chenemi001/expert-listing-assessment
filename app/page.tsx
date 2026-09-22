import MobileHeader from "@/components/layout/MobileHeader";
import DesktopHeader from "@/components/layout/DesktopHeader";
import BottomNav from "@/components/layout/BottomNav";
import Stories from "@/components/feed/Stories";
import FeedFilters from "@/components/feed/FeedFilters";
import Composer from "@/components/feed/Composer";
import Feed from "@/components/feed/Feed";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eeeeee] text-[#222]">
      <DesktopHeader />

      <div className="mx-auto min-h-screen w-full max-w-[680px] overflow-hidden bg-white pb-16 shadow-sm md:min-h-0 md:my-6 md:rounded-2xl md:pb-0 md:shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.05)] md:ring-1 md:ring-black/5 lg:max-w-[720px]">
        <MobileHeader />

        <Stories />

        <FeedFilters />

        <Composer />

        <Feed />
      </div>

      <BottomNav />
    </div>
  );
}