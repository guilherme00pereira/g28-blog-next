import React from 'react'
import CardBox from '@/components/home/CardBox'
import {
  SiJavascript,
  SiPhp,
  SiReact,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiDotnet,
  SiVuedotjs,
  SiLaravel,
} from '@icons-pack/react-simple-icons'
import { useTheme } from 'next-themes'

const StackWrapper = ({ children }) => {
  return <div className="px-4">{children}</div>
}

const StackBox = () => {
  const { theme } = useTheme()
  const color = theme === 'light' ? 'black' : 'white'

  return (
    <CardBox buttonText="See all" linkText="/stack">
      <div className="linear-blue line-bottom relative text-2xl font-bold before:w-[84px]">
        My Stack
      </div>
      <div className="flex h-[360px] flex-wrap items-center justify-center xl:w-[240px]">
        <StackWrapper>
          <SiPhp color="default" size={48} />
        </StackWrapper>
        <StackWrapper>
          <SiReact color="default" size={48} />
        </StackWrapper>
        <StackWrapper>
          <SiNextdotjs color={color} size={48} />
        </StackWrapper>
        <StackWrapper>
          <SiPython color="default" size={48} />
        </StackWrapper>
        <StackWrapper>
          <SiJavascript color="default" size={48} />
        </StackWrapper>
        <StackWrapper>
          <SiTypescript color="default" size={48} />
        </StackWrapper>
        <StackWrapper>
          <SiDotnet color="default" size={48} />
        </StackWrapper>
        <StackWrapper>
          <SiLaravel color="default" size={48} />
        </StackWrapper>
        <StackWrapper>
          <SiVuedotjs color="default" size={48} />
        </StackWrapper>
      </div>
    </CardBox>
  )
}

export default StackBox
