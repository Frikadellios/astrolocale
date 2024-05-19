import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE } from "@/consts"

type Context = {
  site: string
}

export async function GET(context: Context) {
	const posts = await getCollection("blog")
  const projects = await getCollection("projects")

  const items = [
    ...posts.map(post => ({ ...post, pubDate: post.data.pubDate })),
    ...projects.map(project => ({ ...project, pubDate: project.data.pubDate }))
  ]

  items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.pubDate,
      link: item.slug.startsWith("blog")
        ? `/${lang}/blog/${item.slug}/`
        : `/${lang}/projects/${item.slug}/`,
    })),
  })
}
