import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
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
      <ScrollTopAndComment />
      <Hero />
      <MyServicesBox />
      <div className="flex flex-col justify-evenly space-y-16 xl:flex-row xl:space-x-4 xl:space-y-0">
        <TestimonialsBox />
        <StackBox />
      </div>
      <div className="my-24 flex flex-col justify-between space-y-16 xl:flex-row xl:space-x-4 xl:space-y-0">
        <RecentPosts posts={posts} />
        <TagsBox />
      </div>
      <div className="flex justify-center">
        <div className="flex w-10/12 flex-col justify-evenly xl:flex-row">
          <ContactBox />
          <HireMeBox />
        </div>
      </div>
      {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
