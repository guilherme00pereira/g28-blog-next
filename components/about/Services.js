import React from 'react'
import { webAppService, apiService, wordpressService } from '@/data/servicesData'
import { wordpressPlugin } from '@/data/pricedServicesData'
import Image from 'next/image'
import WebDevelopment from '../../public/static/images/services/web-app-dev.png'


const PriceServiceIcon = ({ topic }) => {
  return (
    <div class="flex-shrink-0">
      <svg
        class="mr-2 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="6"
        stroke="currentColor"
        fill="#10b981"
        viewBox="0 0 1792 1792"
      >
        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
      </svg>
    </div>
  )
}

const ServicePriceBox = ({ service }) => {
  return (
    <div class="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="pricing-box mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
        <div class="lg:flex-shrink-1 bg-white px-6 py-8 dark:bg-gray-800 lg:p-12">
          <h3 class="text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
            {service.title}
          </h3>
          <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            {service.description}
          </p>
          <div class="mt-8">
            <div class="flex items-center">
              <h4 class="linear-blue font-bold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-xl md:leading-14">
                What do I do
              </h4>
              <div class="flex-1 border-t-2 border-slate-300 ml-4 dark:border-slate-700"></div>
            </div>
            <ul class="lg:col-gap-8 lg:row-gap-5 mt-8 lg:grid lg:grid-cols-2">
              {service.items.map((item) => {
                  return (
                    <li class="flex items-start lg:col-span-1">
                      <PriceServiceIcon />
                      <p class="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                        {item}
                      </p>
                    </li>
                  )
                  })
              }
              
            </ul>
          </div>
        </div>
        <div class="bg-gray-50 px-6 py-8 text-center dark:bg-gray-700 lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
          <p class="text-lg font-bold leading-6 text-gray-900 dark:text-white">From</p>
          <div class="mt-4 flex items-center justify-center text-6xl font-extrabold leading-none text-gray-900 dark:text-white">
            <span className='text-2xl'>US$</span>
            <span className='ml-2'>{service.price}</span>
          </div>
          <div class="mt-6">
            <div class="rounded-md shadow">
            <div className="linear-button rounded-lg px-4 py-2 text-white">
                Hire this service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <div className="mb-10 flex w-full flex-wrap justify-evenly rounded-xl p-6">
      <ServicePriceBox service={wordpressPlugin} />
    </div>
  )
}

export default Services
