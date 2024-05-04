/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "qph.cf2.quoracdn.net",
      },
    ],
  },
};

export default nextConfig;
