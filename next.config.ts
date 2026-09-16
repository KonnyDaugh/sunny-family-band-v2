import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

if (process.env.NODE_ENV === "development") {
  nextConfig.rewrites = async () => [
    {
      source: "/api/booking.php",
      destination: "http://127.0.0.1:8000/booking.php",
    },
  ];
}

export default nextConfig;