// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "ajpbucket.ideahubbd.com",
//       "ajp.ideahubbd.com",
//       "images.ajkerpatrika.com",
//       "worker.ideahubbd.com",
//     ],
//   },
// };

// export default nextConfig;

import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    loader: "custom",
    loaderFile: "./src/app/utils/imageLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ajpbucket.ideahubbd.com",
      },
      {
        protocol: "https",
        hostname: "ajp.ideahubbd.com",
      },
      {
        protocol: "https",
        hostname: "images.ajkerpatrika.com",
      },
      {
        protocol: "https",
        hostname: "worker.ideahubbd.com",
      },
    ],
  },
};

export default withPlaiceholder(config);
