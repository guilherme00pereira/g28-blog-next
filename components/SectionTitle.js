export default function PageTitle({ title, summary, subtitle = false }) {
  if (subtitle) {
    return (
      <div className="w-3/5 divide-y-2 divide-slate-300 pb-10 text-center dark:divide-slate-700">
        <h2 className="linear-blue text-2xl font-bold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          {title}
        </h2>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{summary}</p>
      </div>
    )
  }
  return (
    <h1 className="linear-blue text-3xl font-bold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {title}
    </h1>
  )
}
