import PostBox from '@/components/home/PostBox'
import Link from '@/components/Link'

const MAX_DISPLAY = 3

const RecentPosts = ({ posts }) => {
  return (
    <div className="flex basis-9/12 flex-col">
      <h2 className="linear-blue line-bottom relative mb-8 text-3xl font-bold before:w-[120px]">
        Featured Posts
      </h2>
      <div className=" divide-y-2 divide-solid divide-slate-300 dark:divide-slate-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          return <PostBox post={post} key={post.slug} />
        })}
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="mt-2 flex justify-start text-base font-medium leading-6 xl:mt-8">
          <div className="linear-button rounded-lg px-4 py-2 text-white">
            <Link href="/blog" aria-label="See all posts">
              See all Posts &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecentPosts
