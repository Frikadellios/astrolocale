import type { CollectionEntry } from 'astro:content'
import ArrowCard from '@/components/react/ArrowCard.astro'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

type Props = {
  tags: string[]
  data: CollectionEntry<'blog'>[]
}

export default function Blog({ data, tags }: Props) {
  const [filter, setFilter] = useState(new Set<string>())
  const [posts, setPosts] = useState<CollectionEntry<'blog'>[]>([])

  useEffect(() => {
    const filteredPosts = data.filter(entry =>
      Array.from(filter).every(value =>
        entry.data.tags?.some(
          (tag) => tag.toLowerCase() === String(value).toLowerCase(),
        ),
      ),
    );
    setPosts(filteredPosts);
  }, [data, filter]);

  function toggleTag(tag: string) {
    setFilter(prev => {
      const newFilter = new Set(prev);
      if (prev.has(tag)) {
        newFilter.delete(tag);
      } else {
        newFilter.add(tag);
      }
      return newFilter;
    });
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
      <div className='col-span-3 sm:col-span-1'>
        <div className='sticky top-24'>
          <div className='text-sm font-semibold uppercase mb-2 text-black dark:text-white'>
            Filter
          </div>
          <ul className='flex flex-wrap sm:flex-col gap-1.5'>
            {tags.map((tag, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <li key={index}>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    'w-full px-2 py-1 rounded',
                    'whitespace-nowrap overflow-hidden overflow-ellipsis',
                    'flex gap-2 items-center',
                    'bg-black/5 dark:bg-white/10',
                    'hover:bg-black/10 hover:dark:bg-white/15',
                    'transition-colors duration-300 ease-in-out',
                    filter.has(tag) && 'text-black dark:text-white',
                  )}
                >
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className={cn(
                      'size-5 fill-black/50 dark:fill-white/50',
                      'transition-colors duration-300 ease-in-out',
                      filter.has(tag) && 'fill-black dark:fill-white',
                    )}
                  >
                    <use
                      href={'/ui.svg#square'}
                      className={cn(!filter.has(tag) ? 'block' : 'hidden')}
                    />
                    <use
                      href={'/ui.svg#square-check'}
                      className={cn(filter.has(tag) ? 'block' : 'hidden')}
                    />
                  </svg>
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='col-span-3 sm:col-span-2'>
        <div className='flex flex-col'>
          <div className='text-sm uppercase mb-2'>
            SHOWING {posts.length} OF {data.length} POSTS
          </div>
          <ul className='flex flex-col gap-3'>
            {posts.map(post => (
              // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
              <li>
                <ArrowCard entry={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
