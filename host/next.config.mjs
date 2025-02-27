import { NextFederationPlugin } from '@module-federation/nextjs-mf';
/** @type {import('next').NextConfig} */

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // es el modulo federado del mfe1
    home: `home@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        dts: false,
        exposes: {
        },
        remotes:  remotes(options.isServer),
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
