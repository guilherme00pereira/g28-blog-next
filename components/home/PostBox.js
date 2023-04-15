import Link from 'next/link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'

const PostBox = ({ post }) => {
  const { slug, summary, title, tags, images, readingTime } = post

  return (
    <div className="my-2 w-full">
      <div className="flex flex-col items-center justify-between rounded-lg p-4 md:flex-row">
        {images && (
          <div className="relative mr-4 flex h-[140px] min-w-[280px] justify-center">
            <Image
              className="light-border rounded-lg"
              src={images[0]}
              alt={title}
              fill
              object-fit="contain"
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
            />
          </div>
        )}
        <div className="my-6 flex h-[140px] flex-col justify-between xl:my-2">
          <div>
            <Link href={`/blog/${slug}`} passHref legacyBehavior>
              <h3 className="cursor-pointer text-2xl font-semibold leading-8 tracking-wide hover:text-slate-600 dark:text-slate-300 hover:dark:text-cyan-500 ">
                {title}
              </h3>
            </Link>
          </div>
          <div className="grow text-gray-700 dark:text-gray-400">
            {summary.substring(0, 100)} {summary.length > 100 ? '...' : ''}
          </div>
          <div className="flex justify-between">
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
            <div>{readingTime.text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostBox
