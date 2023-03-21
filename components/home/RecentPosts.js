import PostCard from '@/components/blog/PostCard'

const MAX_DISPLAY = 6

const RecentPosts = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
                return <PostCard post={post} key={post.slug} />
            })}
            {posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6">
                    <Link
                        href="/blog"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="All posts"
                    >
                        All Posts &rarr;
                    </Link>
                </div>
            )}
        </div>

    );
};

export default RecentPosts;