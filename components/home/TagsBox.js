import React, { useEffect, useState } from 'react'
import CardBox from '@/components/home/CardBox'
import Link from '@/components/Link'
import { kebabCase } from 'pliny/utils/kebabCase'
import { getAllTags } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

const TagsBox = () => {
  const [tags, setTags] = useState([])
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  useEffect(() => {
    getAllTags(allBlogs).then((tags) => setTags(tags))
  }, [])

  return (
    <CardBox buttonText="See all tags" linkText="/tags">
      <div className="linear-blue line-bottom relative text-2xl font-bold before:w-[36px]">
        Tags
      </div>
      <div className="flex grow flex-col flex-wrap justify-center">
        {sortedTags.map((t) => (
          <div key={t} className="my-2 mr-5 rounded-xl hover:dark:border-cyan-500 ">
            <Link
              href={`/tags/${kebabCase(t)}`}
              className="mr-3 text-sm uppercase text-slate-800 dark:text-slate-300 hover:dark:text-cyan-500"
            >
              {t.split(' ').join('-')} <span className="ml-2">( {tags[t]} )</span>
            </Link>
          </div>
        ))}
      </div>
    </CardBox>
  )
}

export default TagsBox
