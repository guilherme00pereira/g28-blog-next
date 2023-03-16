import { PageSEO } from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'

export default function About() {
  
  return (
    <>
      <PageSEO title={'About - Guilherme Pereira'} description={'About me - Guilherme Pereira'} />
      <div className='flex flex-col items-center'>
        <SectionTitle title="About Me" subtitle />
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">  
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">fkljdaskljskdjas</div>
        </div>
        <SectionTitle title="My Services" subtitle />
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">  
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">fkljdaskljskdjas</div>
        </div>
        <SectionTitle title="Testimonials" subtitle />
      </div>
    </>
  )
}
