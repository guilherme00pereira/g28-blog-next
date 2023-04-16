import { useEffect, useState } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import Link from '@/components/Link'
import SectionTitle from '@/components/SectionTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'
import Breadcrumb from '@/components/blog/Breadcrumb'
import { kebabCase } from 'pliny/utils/kebabCase'
import { useRouter } from 'next/router'

export default function PostLayout({ content, children }) {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const { path, date, title, tags, images, readingTime } = content

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0]
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()
    pathArray = pathArray.filter((path) => path !== '')
    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      }
    })
    setBreadcrumbs(breadcrumbs)
  }, [router.asPath])

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${path}`} {...content} />
      <ScrollTopAndComment />
      <article>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} pageTitle={title} />}
        <header>
          <div className="flex flex-col items-center border-t border-gray-200 py-10 text-center dark:border-gray-700">
            <div className="w-4/5 pb-10">
              <SectionTitle title={title} />
            </div>
            {images && (
              <div className="light-border mt-18 relative inline-block h-[400px] w-[800px] overflow-hidden rounded-lg dark:outline-0">
                <Image
                  className="h-auto w-auto rounded-lg"
                  src={images[0]}
                  alt={title}
                  fill
                  object-fit="contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            )}
            <div className="flex w-3/4 flex-row justify-between pt-8">
              <div className="flex flex-row justify-between text-base leading-6 text-gray-500 dark:text-gray-400">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd>
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </dl>
                <span className="ml-6">{readingTime.text}</span>
              </div>
              <div>Share</div>
            </div>
          </div>
        </header>
        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700">
          <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 text-justify text-xl dark:prose-dark">
              {children}
            </div>
          </div>
          <div className="pb-6 pt-2">
            {tags && (
              <div className="flex flex-wrap justify-start pt-2">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="mb-2 mr-5 mt-2 rounded-xl border border-slate-300 p-3 shadow hover:border-cyan-500 hover:shadow-neon dark:border-slate-700"
                  >
                    <Link
                      href={`/tags/${kebabCase(tag)}`}
                      className="text-sm font-medium uppercase text-slate-800 hover:text-cyan-500 dark:text-slate-300 hover:dark:text-cyan-500"
                    >
                      #{tag.split(' ').join('-')}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
