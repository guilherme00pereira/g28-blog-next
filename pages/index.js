import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/home/Hero'
import RecentPosts from '@/components/home/RecentPosts'
import StackBox from '@/components/home/StackBox'
import TagsBox from '@/components/home/TagsBox'

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return {
    props: {
      posts,
    },
  }
}
export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <Hero />
        <div className="flex justify-between">
          <RecentPosts posts={posts} />
          <TagsBox />
        </div>
      </div>
      <div className="flex justify-evenly">
        <StackBox />
      </div>
      {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
