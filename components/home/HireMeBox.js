import Image from 'next/image'
import Freela99 from '../../public/static/images/logos/99.png'
import Upwork from '../../public/static/images/logos/upwork.png'
import Workana from '../../public/static/images/logos/workana.jfif'

const HireMeBox = () => {
  return (
    <div className="my-16 flex basis-1/3 flex-col justify-evenly">
      <div>
        <h2 className="linear-blue text-3xl font-bold">Hire Me</h2>
      </div>
      <div className="flex justify-evenly">
        <div className="overflow-hidden rounded-xl">
          <Image src={Freela99} alt="99 Freelas" width="80" height="80" />
        </div>
        <div className="overflow-hidden rounded-xl">
          <Image src={Upwork} alt="Upwork" width="80" height="80" />
        </div>
        <div className="overflow-hidden rounded-xl">
          <Image src={Workana} alt="Workana" width="80" height="80" />
        </div>
      </div>
    </div>
  )
}

export default HireMeBox
