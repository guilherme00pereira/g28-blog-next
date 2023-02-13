import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'
const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm uppercase text-slate-800 dark:text-slate-400"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}
export default Tag
