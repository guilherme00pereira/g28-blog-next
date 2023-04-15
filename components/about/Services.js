import React from 'react'
import { webAppService, apiService, wordpressService } from '@/data/servicesData'
import Image from 'next/image'
import WebDevelopment from '../../public/static/images/services/web-app-dev.png'

const ServiceIcon = ({ topic }) => {
  return (
    <li className="flex items-baseline justify-between space-x-4">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <span className="ml-2">{topic}</span>
    </li>
  )
}

const ServiceWrapper = ({ service }) => {
  return (
    <div className="card-wrapper m-4 flex w-full items-center justify-center p-0.5">
      <div className={`flex h-[360px] w-full justify-between space-x-12 ${service.homecolor}`}>
        <div className="m-4 flex flex-col">
          <h6 className="my-2 text-3xl">{service.title}</h6>
          <ol className="my-2">
            {service.topics.map((topic, index) => {
              return <ServiceIcon key={index} topic={topic} />
            })}
          </ol>
          {/*{service.text}*/}
        </div>
        <div className="">
          <div className="relative flex h-[360px] w-[360px] overflow-hidden opacity-90">
            <Image
              className=""
              src={WebDevelopment}
              alt={service.title}
              fill
              object-fit="contain"
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <div className="mb-10 flex w-full flex-wrap justify-evenly rounded-xl p-6">
      <ServiceWrapper service={webAppService} />
      <ServiceWrapper service={apiService} />
      <ServiceWrapper service={wordpressService} />
    </div>
  )
}

export default Services
