import getPagePath from '@/utilities/getPagePath';
import getPublishedPosts from '@/utilities/getPublishedPosts';
import slugify from '@sindresorhus/slugify';
import { directoryNames } from '@/i18n/i18n';

export type Tags = {
  slugified: string; 
  name: string;
}[]

export async function getUniqueTags(collection:any, locale: string = ''): Promise<Tags>{ 
  return (await getPublishedPosts(locale, collection, ''))
    .flatMap((post: { data: { tags: any; }; }) => post.data.tags)
    .map((tag: any) => ({
      slugified: slugify(tag),
      name: tag 
    }))
    .filter((value: { slugified: any; }, index: any, self: any[]) =>
      // Tag is slugified here just in case in other places we'd use a different method to slugify it.
      self.findIndex(tag => tag.slugified === value.slugified) === index
    )
    .sort((tagA: { slugified: string; }, tagB: { slugified: any; }) => tagA.slugified.localeCompare(tagB.slugified));
};

export async function getPostsByTag(collection: "blog", tag: string, locale: string) {
  return (await getPublishedPosts(locale, collection)).filter((post: { data: { tags: any[]; }; }) => post.data.tags.map((item: any) => {return slugify(item)}).includes(slugify(tag)))
}

export const getTagPath = (locale: string, tag: string, addLeadingSlash: boolean = true): string=>{
  const directories = [directoryNames.tags[locale]]
  return getPagePath(locale, directories, tag, addLeadingSlash)
}