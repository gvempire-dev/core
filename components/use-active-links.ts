import * as React from 'react';
import { useRouter } from 'next/router';

export type Link = {
  href: string;
  text: string;
  active?: boolean;
};

export type UseActiveLinks = (linksList: Link[]) => Link[];

const useActiveLinks: UseActiveLinks = (linksList) => {
  const { pathname } = useRouter();

  const [activeLinks, setActiveLinks] = React.useState(linksList);

  /** `link` is not external and matches the current pathname */
  const isActive = (link: Link) =>
    !link.href.startsWith('http') &&
    pathname.split('/')[1] === link.href.split('/')[1];

  React.useEffect(() => {
    /** Map through the links and set `active: true` if `isActive` */
    const mapActiveToLink = (linksList: Link[]) =>
      linksList.map((link) =>
        isActive(link)
          ? {
              ...link,
              active: true,
            }
          : { ...link, active: false },
      );

    setActiveLinks(mapActiveToLink(activeLinks));
  }, [pathname]);

  return activeLinks;
};

export default useActiveLinks;
