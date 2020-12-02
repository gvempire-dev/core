require('./env.js');
const withMDXEnhanced = require('next-mdx-enhanced');

// const withMDX = require('@next/mdx')({ extension: /\.(md|mdx)?$/ });

module.exports = withMDXEnhanced({
  layoutPath: 'common/layouts',
  defaultLayout: false,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})(/* your normal nextjs config */);
