import Link from 'next/link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import readingTime from 'reading-time'

const PostCard = ({ post }) => {
  const { slug, date, title, tags, images, readingTime } = post

  return (
    <div className="hover-moveup my-2 w-full hover:mt-1">
      <div className="border-1 h-[460px] rounded-lg border border-slate-400 bg-slate-200 p-4 dark:border-gray-800 dark:bg-wrapper-dark">
        <Link
          href={`/blog/${slug}`}
          passHref
          className="text-slate-700 dark:text-gray-100"
          legacyBehavior
        >
          <article>
            {images && (
              <div className="relative flex h-[200px] flex-row justify-center sm:h-[280px]">
                <Image
                  className="rounded-lg"
                  src={images[0]}
                  alt={title}
                  fill
                  object-fit="contain"
                />
              </div>
            )}
            <div className="mt-2 space-y-2">
              <div className='flex flex-row justify-between w-full'>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <div className='text-slate-800 dark:text-slate-400'>
                  {readingTime.text}
                </div>
              </div>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
                  </div>
                </div>
              </div>
              <div>
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </dl>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
