import siteMetadata from '@/data/siteMetadata'
import PostListLayout from '@/layouts/PostListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

export const POSTS_PER_PAGE = 10
export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogs)
  const initialDisplayPosts = posts //.length > POSTS_PER_PAGE ? posts.slice(0, POSTS_PER_PAGE) : posts
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }
  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}
export default function BlogPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <PostListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
