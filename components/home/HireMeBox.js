import Image from 'next/image'
import Freela99 from '../../public/static/images/logos/99.png'
import Upwork from '../../public/static/images/logos/upwork.png'
import Workana from '../../public/static/images/logos/workana.png'
import Link from '@/components/Link'

const HireMeBox = () => {
  return (
    <div className="flex basis-1/3 flex-col items-end justify-evenly">
      <div>
        <h2 className="linear-blue line-bottom-right relative mb-8 text-3xl font-bold before:w-[72px]">
          Hire Me
        </h2>
      </div>
      <div className="flex justify-start space-x-4">
        <div className="light-border overflow-hidden rounded-xl">
          <Link href="https://www.99freelas.com.br/user/guilherme00pereira" target="_blank">
            <Image src={Freela99} alt="99 Freelas" width="72" height="72" />
          </Link>
        </div>
        <div className="light-border overflow-hidden rounded-xl">
          <Link href="https://www.upwork.com/freelancers/~01051a6451094f7ccf" target="_blank">
            <Image src={Upwork} alt="Upwork" width="72" height="72" />
          </Link>
        </div>
        <div className="light-border overflow-hidden rounded-xl">
          <Link
            href="https://www.workana.com/freelancer/b876787917c31fa45574281522de0f5f"
            target="_blank"
          >
            <Image src={Workana} alt="Workana" width="72" height="72" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HireMeBox
