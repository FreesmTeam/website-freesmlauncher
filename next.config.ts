import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
      locales: ['en-US', 'ru-RU'],
      defaultLocale: 'en-US',
  }
};

export default nextConfig;
