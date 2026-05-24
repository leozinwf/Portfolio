// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Adicione esta linha para permitir a qualidade 85 e a padrão 75:
    qualities: [75, 85, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fxphpdydrqoltgzkfrtx.supabase.co',
        port: '',
        pathname: '/**', // Permite qualquer imagem dentro desse domínio
      },
    ],
    
  },
};

export default nextConfig;