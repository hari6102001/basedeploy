import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Adding the export output as required
};

// Sentry configuration wrapper
const sentryConfig = {
  silent: true,
  org: "javascript-mastery",
  project: "javascript-nextjs",
};

const sentryWebpackPluginOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(
  nextConfig,
  sentryConfig,
  sentryWebpackPluginOptions
);