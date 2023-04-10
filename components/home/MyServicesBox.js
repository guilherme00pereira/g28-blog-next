import { servicesData } from '@/data/servicesData'

const MyServicesBox = () => {
  const basecss = 'm-2 basis-1/3 bg-gradient-to-l p-4'
  const web = servicesData.find((s) => s.thumb === 'web')
  const api = servicesData.find((s) => s.thumb === 'api')
  const wp = servicesData.find((s) => s.thumb === 'wp')

  return (
    <div className="my-16 flex flex-col">
      <div>
        <h2 className="linear-blue text-3xl font-bold">What Do I Do</h2>
      </div>
      <div className="mt-6 flex">
        <div
          key={web.thumb}
          className={`${basecss} from-emerald-700 to-emerald-600 text-emerald-100`}
        >
          <h6 className="my-2 text-3xl">{web.title}</h6>
          <p>{web.summary}</p>
        </div>
        <div key={api.thumb} className={`${basecss} from-violet-500 to-violet-400 text-violet-100`}>
          <h6 className="my-2 text-3xl">{api.title}</h6>
          <p>{api.summary}</p>
        </div>
        <div key={wp.thumb} className={`${basecss} from-indigo-500 to-indigo-400 text-indigo-100`}>
          <h6 className="my-2 text-3xl">{wp.title}</h6>
          <p>{wp.summary}</p>
        </div>
      </div>
    </div>
  )
}

export default MyServicesBox
