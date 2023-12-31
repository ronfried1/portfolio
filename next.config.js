/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};



// {
//   images: {
//     dangerouslyAllowSVG: true,
//     contentDispositionType: "attachment",
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
// };
