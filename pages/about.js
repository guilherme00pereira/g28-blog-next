import { PageSEO } from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'
import Testimonials from '@/components/about/Testimonials'
import Services from '@/components/about/Services'

export default function About() {

  return (
    <>
      <PageSEO title={'About - Guilherme Pereira'} description={'About me - Guilherme Pereira'} />
      <div className='flex flex-col items-center'>
        <SectionTitle title="About Me" subtitle />
        <div className="flex justify-center mb-8">
          <div className="prose pt-8 pb-8 dark:prose-dark text-justify">
            More than 10 years of experience in software development, having
            worked with .NET and PHP on the development of backend API's for
            system integrations. I have good knowledge in object-oriented
            programming and Design Patterns.
            Currently working with the main frameworks in PHP and Javascript, such
            as Laravel, React.js and Vue.js. Good knowledge in frontend for
            implementing and customizing layouts. Also databases and hosting
            services (AWS, EC2, Amplify, Route53, etc... and Digital Ocean).
          </div>
        </div>
        <SectionTitle title="My Services" subtitle />
        <Services />
        <SectionTitle title="Testimonials" subtitle />
        <Testimonials />
      </div>
    </>
  )
}
