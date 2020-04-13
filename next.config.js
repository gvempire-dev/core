const withMDX = require('@next/mdx')({ extension: /\.(md|mdx)?$/ });
require('./env.js');

module.exports = withMDX({
  /**
   * Add PWA config
   * @see https://github.com/shadowwalker/next-pwa
   */
  pwa: {
    dest: 'public',
  },

  /**
   * Use MDX for .md files
   * @see https://github.com/zeit/next.js/tree/canary/packages/next-mdx
   */
  pageExtensions: ['md', 'mdx', 'tsx', 'ts'],

  /**
   *  Public, build-time env vars.
   * @see https://nextjs.org/docs#build-time-configuration
   *
   */
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID:
      process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },
});
