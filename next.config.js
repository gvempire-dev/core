require('./env.js');
const withMDXEnhanced = require('next-mdx-enhanced');

// const withMDX = require('@next/mdx')({ extension: /\.(md|mdx)?$/ });

module.exports = withMDXEnhanced({
  layoutPath: 'common/layouts',
  defaultLayout: false,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [
    require('remark-autolink-headings'),
    require('remark-slug'),
    require('remark-code-titles'),
  ],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => ({
      wordCount: mdxContent.split(/\s+/gu).length,
      readingTime: readingTime(mdxContent),
    }),
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})(/* your normal nextjs config */);
