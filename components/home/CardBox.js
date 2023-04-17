import React from 'react'
import Link from '@/components/Link'

const CardBox = ({ buttonText, linkText, children }) => {
  return (
    <div className="card-wrapper flex flex-col justify-start rounded-xl p-4">
      {children}
      <div className="flex justify-center">
        <div className="linear-button rounded-lg px-4 py-2 text-white">
          <Link href={linkText}>{buttonText}</Link>
        </div>
      </div>
    </div>
  )
}

export default CardBox
