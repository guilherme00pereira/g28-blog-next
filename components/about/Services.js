import { servicesData } from '@/data/servicesData'

const Services = () => {
  return (
    <div className="mb-10 flex w-full flex-wrap justify-evenly rounded-xl p-6 dark:text-slate-400">
      {servicesData.map((service, index) => {
        return (
          <div
            key={index}
            className="colored-border m-4 flex w-full items-center justify-center rounded-xl p-0.5"
          >
            <div className="card-wrapper flex h-full w-full flex-col rounded-xl p-4">
              <h6 className="linear-blue my-2 text-2xl font-bold">{service.title}</h6>
              <ol className="my-2">
                {service.topics.map((topic, index) => {
                  return (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      {topic}
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Services
