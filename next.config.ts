import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: true,
});

const nextConfig: NextConfig = {
  reactStrictMode: false,
};

export default withBundleAnalyzer(nextConfig);
