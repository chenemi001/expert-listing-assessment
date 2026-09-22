export type Story = {
  id: string;
  name: string;
  image: string;
  type?: "profile" | "brand" | "add";
  ringColor?: string;
};

export type PostAuthor = {
  name: string;
  role: string;
  avatar: string;
  category: string;
  time: string;
  location?: string;
  hasStory?: boolean;
};

export type PostStats = {
  likes?: number;
  comments?: number;
  views?: string;
  saves?: number;
};

export type FeedPost = {
  id: string;
  author: PostAuthor;
  content: string;
  image?: string;
  propertyStatus?: "For Rent" | "For Sale";
  propertyType?: "image" | "video";
  likedBy?: string;
  likedByAvatar?: string;
  likesText?: string;
  stats?: PostStats;
  comment?: {
    author: string;
    text: string;
  };
  commentsText?: string;
  carousel?: boolean;
};