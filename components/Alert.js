import React from 'react'
import Github from '@/components/social-icons/github.svg'

const AlertIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  )
}

const InformationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  )
}

const Alert = ({ type, children }) => {
  if (type === 'alert') {
    return (
      <div className="flex items-center justify-start border border-yellow-600 bg-yellow-100 text-yellow-600 dark:bg-amber-300 dark:text-amber-800">
        <div className="ml-4 w-8">
          <AlertIcon />
        </div>
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
  } else {
    return (
      <div className="flex items-center justify-start border border-blue-900 bg-blue-100 text-blue-600">
        <div className="ml-4 w-8">
          <InformationIcon />
        </div>
        <div className="mx-4 text-base">{children}</div>
      </div>
    )
  }
}

export default Alert
