import { Author } from '@features/post';
import { Avatar } from '@features/theme';
import Link from 'next/link';
import * as React from 'react';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div>
        <div>
          <h3>
            <Link as={`/posts/${slug}`} href='/posts/[slug]'>
              <a>{title}</a>
            </Link>
          </h3>
          <div>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p>{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
