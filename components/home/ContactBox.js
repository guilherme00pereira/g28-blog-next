import React from 'react'
import { SiWhatsapp, SiLinkedin, SiGmail } from '@icons-pack/react-simple-icons'

const ContactWrapper = ({ href, children }) => {
  return (
    <div className="">
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  )
}

const Contact = () => {
  return (
    <div className="flex basis-1/3 flex-col justify-evenly">
      <div>
        <h2 className="linear-blue line-bottom relative text-3xl font-bold before:w-[120px]">
          Get in Touch
        </h2>
      </div>
      <div className="mt-8 flex justify-start space-x-8">
        <ContactWrapper href="https://wa.me/5531990891617">
          <SiWhatsapp color="default" size={36} />
        </ContactWrapper>
        <ContactWrapper href="https://www.linkedin.com/in/guilhermepereirasalves/">
          <SiLinkedin color="default" size={36} />
        </ContactWrapper>
        <ContactWrapper href="mailto:guilherme00pereira@gmail.com">
          <SiGmail color="default" size={36} />
        </ContactWrapper>
      </div>
    </div>
  )
}

export default Contact
