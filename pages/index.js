import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/home/Hero'
import RecentPosts from '@/components/home/RecentPosts'
import StackBox from '@/components/home/StackBox'
import TagsBox from '@/components/home/TagsBox'
import MyServicesBox from '@/components/home/MyServicesBox'
import Contact from '@/components/Contact'
import TestimonialsBox from '@/components/home/TestimonialsBox'

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
      <Hero />
      <MyServicesBox />
      <Contact />
      <div className="flex justify-between mb-24">
        <RecentPosts posts={posts} />
        <TagsBox />
      </div>
      <div className="flex justify-evenly space-x-24">
        <TestimonialsBox />
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
