import { PageSEO } from '@/components/SEO'
import SectionTitle from '@/components/SectionTitle'
import Testimonials from '@/components/about/Testimonials'
import Services from '@/components/about/Services'
import Link from '@/components/Link'

export default function About() {
  return (
    <>
      <PageSEO title={'About - Guilherme Pereira'} description={'About me - Guilherme Pereira'} />
      <div className="flex flex-col items-center">
        <SectionTitle title="About Me" />
        <div className="mb-8 flex justify-center">
          <div className="prose pt-8 pb-8 text-justify text-xl dark:prose-dark">
            <p>
              I am a Full Stack Developer with 10+ years of experience in the field, having a
              software development expertise in both frontend and backend development, working with
              Javascript, PHP, Python, C#, among others, APIs integration, using concepts such as
              OOP, SOLID and design patterns. Work with several frameworks like React.js, Vue.js,
              Laravel, .Net and more, as you can <Link href="/stack">check here</Link>
            </p>

            <p>
              I have worked on several projects as a company collaborator and also as a freelancer,
              which have allowed me to acquire a broad skill set and a deep understanding of
              different development frameworks and tools. I have experience in building scalable and
              maintainable web applications.
            </p>

            <p>
              Furthermore, I am highly familiar with cloud technologies such as AWS, Google Cloud,
              and Digital Ocean. I have worked on projects that involved the integration of various
              cloud services such as hosting, database management, and deployment automation, which
              allowed me to gain an in-depth understanding of the cloud ecosystem.
            </p>

            <p>
              In addition to my technical skills, I am also highly collaborative, proactive, and
              possess excellent communication skills. I am comfortable working in a team environment
              and enjoy brainstorming solutions and ideas with my colleagues.
            </p>
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
