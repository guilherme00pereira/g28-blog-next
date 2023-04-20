import React from 'react'
import Github from '@/components/social-icons/github.svg'

const getIcon = (type) => {
  return (
    <div className="ml-4 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        {type === 'alert' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        )}
        {type === 'information' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        )}
        {type === 'tools' && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        )}
      </svg>
    </div>
  )
}

const Alert = ({ type, children }) => {
  if (type === 'alert') {
    return (
      <div className="flex items-center justify-start border border-yellow-600 bg-yellow-100 text-yellow-600 dark:bg-amber-300 dark:text-amber-800">
        {getIcon(type)}
        <div className="mx-4 text-base">{children}</div>
      </div>
    )
  } else if (type === 'github') {
    return (
      <div className="flex items-center justify-start border border-neutral-900 bg-neutral-100 text-neutral-600 dark:bg-neutral-300">
        <div className="ml-4 w-8">
          <Github className="h-5 w-5 fill-current text-gray-700" />
        </div>
        <div className="mx-4 text-base">{children}</div>
      </div>
    )
  } else if (type === 'tools') {
    return (
      <div className="flex items-center justify-start border border-neutral-900 bg-neutral-100 text-neutral-600 dark:bg-neutral-300">
        <div className="ml-4 w-8">{getIcon(type)}</div>
        <div className="mx-4 text-base">{children}</div>
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-start border border-blue-900 bg-blue-100 text-blue-600">
        {getIcon(type)}
        <div className="mx-4 text-base">{children}</div>
      </div>
    )
  }
}

export default Alert
