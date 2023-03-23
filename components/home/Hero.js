import Image from '../Image'
import ProfilePicture from '../../public/static/images/perfil.webp'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center py-16 sm:flex-row sm:justify-center sm:space-x-20">
      <div className="ml-24">
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
        <p className="text-gray-400">Hi everyone!</p>
        <div className="linear-blue">
          <div className="text-4xl">
            My name is <br className="sm:hidden" />
            Guilherme Pereira
          </div>
          <div className="text-3xl">I'm a full stack developer</div>
          <div className="mt-6 flex flex-row space-x-4">
            <SocialIcon kind="mail" href={siteMetadata.social.email} />
            <SocialIcon kind="whatsapp" href={siteMetadata.social.whatsapp} />
            <SocialIcon kind="github" href={siteMetadata.social.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.social.linkedin} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
