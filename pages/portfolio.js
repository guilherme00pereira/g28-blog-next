import siteMetadata from '@/data/siteMetadata'
import { projectsData, workData } from '@/data/projectsData'
import SectionTitle from '@/components/SectionTitle'
import PortfolioCard from '@/components/projects/PortfolioCard'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <div className="container py-12">
          <SectionTitle title="Projects I Worked On" summary="These are some projects that I have been working on" subtitle />
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
        <div className="container py-12">
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
        </div>
      </div>
    </>
  )
}
