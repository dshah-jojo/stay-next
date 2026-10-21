/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully client-side prototype: static export serves Vercel and is what
  // the Capacitor Android shell bundles (webDir: out).
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
