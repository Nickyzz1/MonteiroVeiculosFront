import type { NextConfig } from "next";
import { sourceMapsEnabled } from "process";

const nextConfig = {
  rewrites:() => {
      return[
        {
          source: '/',
          destination: '/home'
        },
        {
          source: '/v1/category',
          destination: '/intoCategory'
        }, {
          source : '/v1/car',
          destination: '/intoCar'
        }
      ]
  },
};

export default nextConfig;
