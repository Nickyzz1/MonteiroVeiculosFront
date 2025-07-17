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
        }, 
        {
          source : '/v1/car',
          destination: '/intoCar'
        },
        {
          source : '/v1/sale',
          destination: '/sale'
        },
        {
          source: '/v1/aboutUs',
          destination: '/aboutUs'
        },
        {
          source: '/v1/auth',
          destination: '/login'
        },
        {
          source: '/v1/home/administrador',
          destination: '/homeAdmin'
        }
      ]
  },
};

export default nextConfig;
