import { FeedPost, Story } from "@/types";

export const stories: Story[] = [
  {
    id: "your-story",
    name: "Your Story",
    image: "/images/avatars/avatar-add-story.png",
    type: "add",
  },
  {
    id: "ramos-realty",
    name: "RamosRealty",
    image: "/images/logos/ramos-reality-logo.png",
    type: "brand",
  },
  {
    id: "jordan",
    name: "Jordan",
    image: "/images/avatars/avatar-jordan-clean.png",
    type: "profile",
  },
  {
    id: "taylor",
    name: "Taylor",
    image: "/images/avatars/avatar-taylor-clean.png",
    type: "profile",
  },
  {
    id: "jamie",
    name: "Jamie",
    image: "/images/avatars/avatar-jamie-clean.png",
    type: "profile",
  },
];

export const feedPosts: FeedPost[] = [
  {
    id: "boy-from-property",
    author: {
      name: "Boy From",
      role: "Developer",
      avatar: "/images/avatars/avatar-05.png",
      category: "Property",
      time: "2h",
      location: "36 Jakande Lekki Peninsula 2, Lagos",
      hasStory: true,
    },
    content:
      "Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    image: "/images/properties/property-01.png",
    propertyStatus: "For Rent",
    propertyType: "image",
    likedBy: "miracle.h",
    likesText: "and 22 others",
    stats: {
      views: "1K Views",
      comments: 2,
    },
  },

  {
    id: "ima-ntuen",
    author: {
      name: "Ima Ntuen",
      role: "Individual",
      avatar: "/images/avatars/avatar-me.png",
      category: "General",
      time: "Just Now",
      location: "Lekki Phase 1, Lagos",
      hasStory: false,
    },
    content: "Post suggestions on how this works easier",
    stats: {
      views: "1 Views",
    },
  },

  {
    id: "maurice-u",
    author: {
      name: "Maurice U",
      role: "Individual",
      avatar: "/images/avatars/avatar-06.png",
      category: "General",
      time: "Just Now",
      location: "Lekki Phase 1, Lagos",
      hasStory: false,
    },
    content:
      "How is everyone holding up with the flooding in Lekki this week? Stay safe out there — and let me know if anyone needs a temporary place to crash 🙏",
    likedBy: "miracle.h",
    likesText: "and 7 others",
    stats: {
      likes: 8,
      comments: 8,
      views: "700 Views",
      saves: 2,
    },
    comment: {
      author: "tunde.b",
      text: "Roads around Admiralty are still bad. Thanks for checking in 🙏",
    },
    commentsText: "View all 7 comments",
  },

  {
    id: "stranger-dan",
    author: {
      name: "Stranger Dan",
      role: "Agent",
      avatar: "/images/avatars/avatar-07.png",
      category: "General",
      time: "Just Now",
      location: "Lekki Phase 1, Lagos",
      hasStory: false,
    },
    content:
      "Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    image: "/images/properties/property-01.png",
    propertyStatus: "For Sale",
    propertyType: "image",
    likedBy: "miracle.h",
    likesText: "and 22 others",
    stats: {
      likes: 23,
      comments: 3,
      views: "1.2k Views",
      saves: 2,
    },
    comment: {
      author: "miracle.h",
      text: "Is the rent negotiable? Interested for my client.",
    },
    commentsText: "View all 3 comments",
    carousel: true,
  },

  {
    id: "felix-okon",
    author: {
      name: "Felix Okon",
      role: "Broker",
      avatar: "/images/avatars/avatar-08.png",
      category: "Property",
      time: "Just Now",
      location: "Lekki Phase 1, Lagos",
      hasStory: false,
    },
    content:
      "New 2-bedroom apartment in Yaba or Akoka. Must have constant water and parking for one car. Moving in by end of next month, priced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.",
    image: "/images/properties/property-02.png",
    propertyStatus: "For Sale",
    propertyType: "video",
    likedBy: "miracle.h",
    stats: {
      likes: 1,
      views: "700 Views",
    },
  },
];