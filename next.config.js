/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  swcMinify: true,
};

module.exports = withNextIntl({ nextConfig });
