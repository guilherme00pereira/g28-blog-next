import React from 'react'
import CardBox from '@/components/home/CardBox'
import Tag from '@/components/Tag'
import { getAllTags } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

const TagsBox = () => {
  const tags = getAllTags(allBlogs)
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <CardBox>
      <div className="flex flex-wrap">
        {sortedTags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </CardBox>
  )
}

export default TagsBox
