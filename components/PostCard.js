import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'

const PostCard = ({ post }) => {
  const { slug, date, title, summary, tags, images } = post

  return (
    <div key={slug} className="hover-moveup my-4 w-full hover:mt-2 md:w-[45%]">
      <div className="border-1 h-[400px] rounded-lg border border-slate-400 bg-slate-200 p-4 dark:border-gray-800 dark:bg-wrapper-dark">
        <article>
          <Link href={`/blog/${slug}`} className="text-slate-700 dark:text-gray-100">
            {images && (
              <div className="relative flex h-[220px] flex-row justify-center">
                <Image className="rounded-lg" src={images[0]} alt={title} fill object-fit="cover" />
              </div>
            )}
            <div className="mt-2 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                  {/* <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div> */}
                </div>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </div>
  )
}

export default PostCard
