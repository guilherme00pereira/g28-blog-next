import Image from '../Image'
import ProfilePicture from '../../public/static/images/perfil.webp'

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center py-16 xl:flex-row xl:justify-center xl:space-x-20">
      <div className="xl:ml-24">
        <Image
          src={ProfilePicture}
          alt=""
          width="200"
          height="200"
          className="w-42 outline-3 rounded-full outline outline-offset-4 outline-sky-400 saturate-50"
          priority
        />
      </div>
      <div className="pt-6 font-semibold sm:w-2/3 sm:pt-0">
        <p className="text-gray-700">Hi everyone!</p>
        <div className="linear-blue">
          <h1 className="text-4xl">
            My name is <br className="sm:hidden" />
            Guilherme Pereira
          </h1>
          <h2 className="text-3xl">I'm a full stack developer</h2>
        </div>
      </div>
    </div>
  )
}
export default Hero
