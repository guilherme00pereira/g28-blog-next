import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'
const Tag = ({ text, total }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-xs font-small uppercase text-slate-800 dark:text-slate-400"
    >
      #{text.split(' ').join('-')}
    </Link>
  )
}
export default Tag
