/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
    ],
  },
  headers: async () => [
    {
      source: "/(.*).(jpg|jpeg|gif|png|svg|ico|css|js)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, must-revalidate",
        },
      ],
    },
  ],
};

export default nextConfig;
