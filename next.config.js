const moduleExports = {
  // Your existing module.exports
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack: (config) => {
    config.devtool = 'hidden-source-map';

    return config;
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*.map',
          destination: '/404',
        },
      ],
    };
  },
};

module.exports = moduleExports;
