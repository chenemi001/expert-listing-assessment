# Expert Listing — Frontend Assessment

A responsive property-focused social feed built from the provided Figma design for the Expert Listing frontend assessment.

The application recreates the provided interface with reusable React components, responsive layouts, interactive states, mock data, and a mobile-first experience.

## ✨ Overview

Expert Listing combines property discovery with a social-style feed where users can:

- Browse property-related posts
- View property images and video previews
- Explore user stories
- Filter and discover trending searches
- Like, save, comment, and share posts
- View property locations and listing status
- Navigate through the mobile bottom navigation
- Interact with responsive UI elements and micro-interactions

The implementation focuses on translating the provided Figma design into a clean, responsive, and maintainable frontend.

---

## 🚀 Live Demo

**Live Demo:** Add your Vercel/Netlify URL here

**GitHub:** http://github.com/chenemi001/expert-listing-assessment

---

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **Next/Image**

---

## 📁 Project Structure

```text
expert-listing-assessment/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── feed/
│   │   ├── Composer.tsx
│   │   ├── Feed.tsx
│   │   ├── FeedFilters.tsx
│   │   ├── FeedPost.tsx
│   │   ├── Stories.tsx
│   │   └── StoryItem.tsx
│   │
│   ├── layout/
│   │   ├── BottomNav.tsx
│   │   └── MobileHeader.tsx
│   │
│   ├── property/
│   │   └── PropertyImage.tsx
│   │
│   └── ui/
│       └── Avatar.tsx
│
├── data/
│   └── mockData.ts
│
├── types/
│   └── index.ts
│
└── public/
    └── images/
        ├── avatars/
        ├── logos/
        └── properties/
