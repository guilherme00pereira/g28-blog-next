import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { kebabCase } from 'pliny/utils/kebabCase'
import { getAllTags } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import SectionTitle from '@/components/SectionTitle'

export const getStaticProps = async () => {
  const tags = await getAllTags(allBlogs)
  return {
    props: {
      tags,
    },
  }
}
export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <div className="flex flex-col items-start justify-start divide-y divide-slate-500 dark:divide-gray-500 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="border-gray-500 tracking-tight dark:border-gray-300 md:border-r-2 md:px-6">
            <SectionTitle title="Tags" />
          </h1>
        </div>
        <div className="flex max-w-lg flex-row flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div
                key={t}
                className="card-wrapper my-2 mr-5 rounded-xl dark:shadow hover:dark:border-cyan-500 hover:dark:shadow-neon "
              >
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="mr-3 text-sm font-medium uppercase text-slate-800 dark:text-slate-300 hover:dark:text-cyan-500"
                >
                  {t.split(' ').join('-')} <span className="ml-2">( {tags[t]} )</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
