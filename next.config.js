require('./env.js');

const withMDX = require('@next/mdx')({ extension: /\.(md|mdx)?$/ });

module.exports = withMDX({
  /**
   * Use MDX for .md files
   * @see https://github.com/zeit/next.js/tree/canary/packages/next-mdx
   */
  pageExtensions: ['md', 'mdx', 'tsx', 'ts'],
});
