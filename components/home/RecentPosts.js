import PostBox from '@/components/home/PostBox'
import Link from '@/components/Link'

const MAX_DISPLAY = 3

const RecentPosts = ({ posts }) => {
  return (
    <div className="flex basis-4/5 flex-col">
      <h2 className="linear-blue text-3xl font-bold">Recent Posts</h2>
      {!posts.length && 'No posts found.'}
      {posts.slice(0, MAX_DISPLAY).map((post) => {
        return <PostBox post={post} key={post.slug} />
      })}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-start text-base font-medium leading-6">
          <div className="linear-button rounded-lg py-2 px-4 text-white">
          <Link
            href="/blog"
            aria-label="See all posts"
          >
            See all Posts &rarr;
          </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecentPosts
