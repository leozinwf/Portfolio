// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Se você for carregar imagens de domínios externos (ex: Github, Supabase Storage), declare-os aqui:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    // ],
  },
};

export default nextConfig;