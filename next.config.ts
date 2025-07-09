import type { NextConfig } from "next";
import { sourceMapsEnabled } from "process";

const nextConfig = {
  rewrites:() => {
      return[
        {
          source: '/',
          destination: '/home'
        }
      ]
  },
};

export default nextConfig;
