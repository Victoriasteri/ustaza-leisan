import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/media/",
          outputPath: "static/media/",
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

export default withNextVideo(nextConfig, { folder: "public" });
