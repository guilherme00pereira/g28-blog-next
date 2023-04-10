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
import ContactBox from '@/components/home/ContactBox'
import TestimonialsBox from '@/components/home/TestimonialsBox'
import HireMeBox from '@/components/home/HireMeBox'

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
      <div className="my-24 flex justify-between">
        <RecentPosts posts={posts} />
        <TagsBox />
      </div>
      <div className="flex justify-evenly space-x-12">
        <TestimonialsBox />
        <StackBox />
      </div>
      <div className="my-24 flex justify-between">
        <ContactBox />
        <HireMeBox />
      </div>
      {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
