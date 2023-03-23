import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PageTitle from '@/components/SectionTitle'
import { MDXComponents } from '@/components/MDXComponents'
import { sortedBlogPost, coreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
const DEFAULT_LAYOUT = 'PostLayoutMin'
export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({
      params: {
        slug: p.slug.split('/'),
      },
    })),
    fallback: false,
  }
}
export const getStaticProps = async ({ params }) => {
  const slug = params.slug.join('/')
  const sortedPosts = sortedBlogPost(allBlogs)
  const post = sortedPosts.find((p) => p.slug === slug)

  return {
    props: {
      post,
    },
  }
}
export default function BlogPostPage({ post }) {
  return (
    <>
      {'draft' in post && post.draft === true ? (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      ) : (
        <MDXLayoutRenderer
          layout={post.layout || DEFAULT_LAYOUT}
          content={post}
          MDXComponents={MDXComponents}
          toc={post.toc}
        />
      )}
    </>
  )
}
