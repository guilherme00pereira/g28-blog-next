import React from 'react'
import CardBox from '@/components/home/CardBox'
import { SiJavascript, SiPhp, SiTypescript } from '@icons-pack/react-simple-icons'

const StackBox = () => {
  return (
    <CardBox title="My Stack" buttonText="See all" linkText="/stack">
      <div className="flex">
        <SiPhp color="default" size={48} />
        <SiJavascript color="default" size={48} />
        <SiTypescript color="default" size={48} />
      </div>
    </CardBox>
  )
}

export default StackBox
