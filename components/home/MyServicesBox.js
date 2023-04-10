import { servicesData } from '@/data/servicesData'

const MyServicesBox = () => {
  return (
    <div className="mt-16 mb-32 flex flex-col">
      <div>
        <h2 className="linear-blue text-3xl font-bold">What Do I Do</h2>
      </div>
      <div className="flex">
        {servicesData.map((service, index) => {
          return (
            <div key={index} className="m-2">
              <h6 className="my-2 text-3xl font-bold">{service.title}</h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyServicesBox
