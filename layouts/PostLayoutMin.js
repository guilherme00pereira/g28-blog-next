import { useEffect, useState } from 'react'
import { Comments } from 'pliny/comments'
import { formatDate } from 'pliny/utils/formatDate'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import Breadcrumb from '@/components/blog/Breadcrumb'
import BreadcrumbItem from '@/components/blog/BreadcrumbItem'
import { useRouter } from 'next/router'

export default function PostLayout({ content, next, prev, children }) {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState([])
  const [loadComments, setLoadComments] = useState(false)
  const { path, slug, date, title, tags, images, readingTime } = content

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
        <div>
          <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            {breadcrumbs &&
              breadcrumbs.map((breadcrumb) => (
                <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
                  {breadcrumb.label}
                </BreadcrumbItem>
              ))}
          </Breadcrumb>
        </div>
        <header>
          <div className="border-t border-gray-200 py-10 text-center dark:border-gray-700">
            <div className="pb-10">
              <PageTitle>{title}</PageTitle>
            </div>
            {images && (
              <div className="mt-18 relative inline-block h-[400px] w-[800px] overflow-hidden">
                <Image
                  className="rounded-lg"
                  src={images[0]}
                  alt={title}
                  fill
                  object-fit="contain"
                />
              </div>
            )}
            <div className="flex flex-row justify-between pt-8">
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
        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pt-10 pb-8 text-justify text-xl dark:prose-dark">
              {children}
            </div>
          </div>
          <div>
            {tags && (
              <div className="pt-4 xl:pt-8">
                <div className="flex flex-wrap justify-center pt-2">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}
          </div>
          {siteMetadata.comments.provider && (
            <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              {!loadComments && (
                <button onClick={() => setLoadComments(true)}>Load Comments</button>
              )}
              {loadComments && <Comments commentsConfig={siteMetadata.comments} slug={slug} />}
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && (
                <div className="max-w-xs pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && (
                <div className="max-w-xs pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
