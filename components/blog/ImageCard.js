import Link from '../Link'

export default function ImageCard({ link, children }) {
  if (link) {
    return (
      <div className="my-6 flex flex-row justify-center rounded-xl border border-slate-400 bg-slate-200 dark:border-gray-800 dark:bg-wrapper-dark">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      </div>
    )
  }
  return (
    <div className="my-6 flex flex-row justify-center rounded-xl border border-slate-400 bg-slate-200 dark:border-gray-800 dark:bg-wrapper-dark">
      {children}
    </div>
  )
}
