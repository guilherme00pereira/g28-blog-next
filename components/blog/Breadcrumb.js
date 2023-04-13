import Link from 'next/link'

const HomeIcon = () => {
  return (
    <div className="mr-2 h-6 w-6 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 p-3 dark:to-cyan-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="-ml-2 -mt-2 h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </div>
  )
}

const ArrowIcon = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-7 w-4"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
  )
}

const BreadcrumbItem = ({ children, index, last }) => {
  if (last) {
    return <span className="text-slate-800 dark:text-slate-400">{children}</span>
  }
  return (
    <li key={index} className="flex flex-row justify-start text-slate-400 dark:text-slate-500">
      {children}
    </li>
  )
}

const Breadcrumb = ({ items, pageTitle }) => {
  const childrenWtihSeperator = items.map((item, index) => {
    if (index !== items.length - 1) {
      return (
        <BreadcrumbItem key={index}>
          <Link href={item.href}>{item.label}</Link>
          <ArrowIcon />
        </BreadcrumbItem>
      )
    }
    return (
      <BreadcrumbItem key={index} last>
        {pageTitle}
      </BreadcrumbItem>
    )
  })
  return (
    <nav className="py-3">
      <ol className="inline-flex space-x-1">
        <HomeIcon />
        <BreadcrumbItem index="0">
          <Link href="/">Home</Link>
          <ArrowIcon />
        </BreadcrumbItem>
        {childrenWtihSeperator}
      </ol>
    </nav>
  )
}

export default Breadcrumb
