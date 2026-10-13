// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   experimental: {
//     agentFeedback: true,
//   },
//   cacheComponents: true,
//   partialPrefetching: true,
//   turbopack: {
//     rules: {
//       "*.css": {
//         loaders: ["@tailwindcss/turbopack"],
//         as: "*.css",
//       },
//     },
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages-এর জন্য স্ট্যাটিক এক্সপোর্ট
  output: "export",

  // স্ট্যাটিক হোস্টিংয়ে next/image কাজ করার জন্য জরুরি
  images: {
    unoptimized: true,
  },
};

export default nextConfig;