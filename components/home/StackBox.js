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

const StackWrapper = ({ children, hide }) => {
  return <div className={`px-4 ${hide ? 'invisible md:visible' : ''}`}>{children}</div>
}

const StackBox = () => {
  const { theme } = useTheme()
  const color = theme === 'light' ? 'black' : 'white'

  return (
    <CardBox buttonText="See all" linkText="/stack">
      <div className="linear-blue line-bottom relative text-2xl font-bold before:w-[84px]">
        My Stack
      </div>
      <div className="mt-8 flex h-[200px] flex-wrap items-center justify-center md:mt-4 md:h-[360px] xl:w-[240px]">
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
        <StackWrapper hide>
          <SiVuedotjs color="default" size={48} />
        </StackWrapper>
      </div>
    </CardBox>
  )
}

export default StackBox
