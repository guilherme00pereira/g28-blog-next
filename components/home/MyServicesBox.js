import { webAppService, apiService, wordpressService } from '@/data/servicesData'

const ServiceWrapper = ({ service }) => {
  return (
    <div className={`m-2 basis-1/3 bg-gradient-to-l p-4 ${service.color}`}>
      <h6 className="my-2 text-3xl">{service.title}</h6>
      <p>{service.summary}</p>
    </div>
  )
}

const MyServicesBox = () => {
  return (
    <div className="my-16 flex flex-col">
      <div>
        <h2 className="linear-blue line-bottom relative text-3xl font-bold before:w-[120px]">
          What Do I Do
        </h2>
      </div>
      <div className="mt-6 flex flex-col md:flex-row">
        <ServiceWrapper service={webAppService} />
        <ServiceWrapper service={apiService} />
        <ServiceWrapper service={wordpressService} />
      </div>
    </div>
  )
}

export default MyServicesBox
