import React from 'react'
import Link from '@/components/Link'

const CardBox = ({ title, buttonText, linkText, children }) => {
  return (
    <div className="card-wrapper flex flex-col justify-center rounded-xl p-8">
      <div className="linear-blue text-2xl">{title}</div>
      {children}
      <div className="flex justify-center">
        <div className="linear-button rounded-lg py-2 px-4 text-white">
          <Link href={linkText}>{buttonText}</Link>
        </div>
      </div>
    </div>
  )
}

export default CardBox
