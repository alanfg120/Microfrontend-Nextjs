import { NextFederationPlugin } from '@module-federation/nextjs-mf';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        dts: false,
        exposes: {
          './home': './src/pages/index.js',
        },
        remotes: {},
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      }),
    );

    return config;
  },
};

export default nextConfig;
