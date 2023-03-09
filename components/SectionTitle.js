export default function PageTitle({ title, summary, subtitle = false }) {
  if(subtitle) {
    return (
      <div className='pb-10 text-center'>
        <h2 className="text-2xl font-bold leading-9 tracking-tight linear-blue sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          {title}
        </h2>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{summary}</p>
      </div>
    )
  }
  return (
    <h1 className="text-3xl font-bold leading-9 tracking-tight linear-blue sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {title}
    </h1>
  )
}
