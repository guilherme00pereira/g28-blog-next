import React from 'react'
import Link from '@/components/Link'

const Button99 = ({ text }) => {
  return (
    <div className="flex justify-center">
      <div className="linear-button rounded-xl px-12 py-3 text-white">
        <Link href="https://www.99freelas.com.br/user/guilherme00pereira">{text}</Link>
      </div>
    </div>
  )
}

export default Button99
