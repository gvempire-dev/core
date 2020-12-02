import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { getPostSlug } from '../../common/layouts/post';
// @ts-ignore
import posts from '../blog/*.mdx';
import { PostFrontMatter } from './../../common/types';

const staticPages = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Services', url: '/services' },
  { title: 'Blog', url: '/blog', changefreq: 'weekly' },
  { title: 'Contact', url: '/contact' },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    // Create each URL row for each static page
    staticPages.forEach((page) => {
      smStream.write({
        changefreq: 'monthly',
        priority: 0.5,
        ...page,
      });
    });

    // Create each URL row for each blog post
    Object.entries(posts).forEach(([name, frontMatter]) => {
      smStream.write({
        title: name,
        url: `/blog/${getPostSlug(frontMatter as PostFrontMatter)}`,
        changefreq: 'weekly',
        priority: 0.9,
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
