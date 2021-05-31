import { Author } from '@features/post';
import { Khari } from '@utils/constants';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export function getAllSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type TempPost = {
    [key: string]: string | Author;
    content: string;
  };

  const posts: TempPost = {
    content: '',
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      posts[field] = realSlug;
    }

    if (field === 'content') {
      posts[field] = content;
    }

    if (data[field]) {
      posts[field] = data[field];
    }

    if (!data.author) {
      posts.author = Khari;
    }
  });

  return posts;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getAllSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
