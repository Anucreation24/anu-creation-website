import type { NextConfig } from "next";

const config = {
  /* 
   * Image Configuration:
   * We support direct absolute URLs and local public paths.
   * Google Drive share links are discouraged due to reliability issues.
   */
  images: {
    remotePatterns: [
      {
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  // Allow mobile devices on local network to access HMR and JS chunks
  allowedDevOrigins: ['192.168.1.8'],
};

export default config as NextConfig;
