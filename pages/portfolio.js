import siteMetadata from '@/data/siteMetadata'
import { projectsData, workData } from '@/data/projectsData'
import SectionTitle from '@/components/SectionTitle'
import PortfolioCard from '@/components/projects/PortfolioCard'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="flex flex-col items-center">
        <SectionTitle title="Portfolio" />
        <div className="flex flex-col items-center py-12">
          <SectionTitle
            title="Projects I Worked On"
            summary="These are some projects that I have been working on as a freelancer"
            subtitle
          />
          <div className="-m-4 flex flex-wrap">
            {workData.map((d) => (
              <PortfolioCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                stack={d.stack}
              />
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col items-center py-12">
          <SectionTitle title="Personal Projects" summary="some of my personal projects" subtitle />
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <PortfolioCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                stack={d.stack}
              />
            ))}
          </div>
        </div> */}
        <div className="flex justify-center">
          <div className="linear-button rounded-xl py-3 px-12 text-white">
            <Link href="https://www.99freelas.com.br/user/guilherme00pereira">
              See more of my work
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
