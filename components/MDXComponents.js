/* eslint-disable react/display-name */
import React from 'react'
import { Pre } from 'pliny/ui/Pre'
import { BlogNewsletterForm } from 'pliny/ui/NewsletterForm'
import TableOfContents from './TableOfContents'
import Image from './Image'
import CustomLink from './Link'
import ImageCard from './blog/ImageCard'
import Alert from './Alert'

export const Wrapper = ({ layout, content, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout content={content} {...rest} />
}
export const MDXComponents = {
  Image,
  ImageCard,
  TableOfContents,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
  Alert,
}
