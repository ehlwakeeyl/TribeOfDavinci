/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All imagery is self-hosted under /public/images, so no remote loader needed.
    unoptimized: false,
  },
};

export default nextConfig;
