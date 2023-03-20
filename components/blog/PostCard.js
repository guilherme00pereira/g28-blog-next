import Link from 'next/link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'

const PostCard = ({ post }) => {
  const { slug, date, title, tags, images, readingTime } = post

  return (
    <div className="hover-moveup my-2 w-full hover:mt-1">
      <div className="card-wrapper h-[460px] rounded-lg p-4">
        <article className="h-full">
          {images && (
            <Link href={`/blog/${slug}`} passHref legacyBehavior>
              <div className="relative flex h-[200px] cursor-pointer flex-row justify-center sm:h-[225px]">
                <Image
                  className="rounded-lg"
                  src={images[0]}
                  alt={title}
                  fill
                  object-fit="contain"
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                />
              </div>
            </Link>
          )}
          <div className="mt-2 flex flex-col">
            <div className="flex w-full flex-row justify-between">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                </dd>
              </dl>
              <div className="text-slate-800 dark:text-slate-400">{readingTime.text}</div>
            </div>
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <div>
                  <Link href={`/blog/${slug}`} passHref legacyBehavior>
                    <h3 className="cursor-pointer text-2xl font-semibold leading-8 tracking-wide hover:text-slate-600 dark:text-slate-300 hover:dark:text-cyan-500 ">
                      {title}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default PostCard
