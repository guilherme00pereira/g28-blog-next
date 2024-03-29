import SectionTitle from '@/components/SectionTitle'
import {
  SiPhp,
  SiJavascript,
  SiCsharp,
  SiPython,
  SiReact,
  SiVuedotjs,
  SiWebstorm,
  SiPhpstorm,
  SiDotnet,
  SiLaravel,
  SiVisualstudiocode,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVisualstudio,
  SiJira,
  SiGithub,
  SiGo,
  SiRust,
  SiAmazonaws,
  SiTypescript,
  SiGitlab,
  SiDigitalocean,
  SiGooglecloud,
  SiPlesk,
  SiBootstrap,
  SiNodedotjs,
  SiWoocommerce,
  SiWordpress,
  SiShopify,
  SiTrello,
  SiNextdotjs,
  SiMysql,
  SiMariadb,
  SiPostgresql,
  SiFirebase,
  SiDjango,
  SiFlutter,
  SiCodeigniter,
  SiVercel,
} from '@icons-pack/react-simple-icons'
import Brand from '@/components/stack/Brand'
import StackSection from '@/components/stack/StackSection'
import { useTheme } from 'next-themes'

const Stack = () => {
  const { theme } = useTheme()
  const color = theme === 'light' ? '#1e293b' : '#cbd5e1'
  const djangoColor = theme === 'light' ? 'default' : '#339933'

  return (
    <div className="container flex w-full flex-col items-center justify-center">
      <SectionTitle title="Stack" />
      <div className="pt-8 text-center text-xl leading-7 text-gray-500 dark:text-gray-400">
        <h3>Here is the tech stack that I am currently working on or have been working with</h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <StackSection title="Languages">
          <Brand title="PHP" url="https://www.php.net/" progress="90">
            <SiPhp color="default" size={48} />
          </Brand>
          <Brand
            title="Javascript"
            url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            progress="90"
          >
            <SiJavascript color="default" size={48} />
          </Brand>
          <Brand title="Typescript" url="" progress="80">
            <SiTypescript color="default" size={48} />
          </Brand>
          <Brand title="Python" url="https://www.python.org/" progress="70">
            <SiPython color="default" size={48} />
          </Brand>
          <Brand title="C#" progress="50">
            <SiCsharp color="#793481" size={48} />
          </Brand>
          <Brand title="Go" url="https://go.dev/" progress="40">
            <SiGo color="default" size={48} />
          </Brand>
          <Brand title="Rust" url="https://www.rust-lang.org/" progress="30">
            <SiRust color={color} size={48} />
          </Brand>
        </StackSection>
        <StackSection title="Frameworks">
          <Brand title="Laravel" progress="80">
            <SiLaravel color="default" size={48} />
          </Brand>
          <Brand title="Codeigniter" progress="60">
            <SiCodeigniter color="default" size={48} />
          </Brand>
          <Brand title="React.js" progress="90">
            <SiReact color="default" size={48} />
          </Brand>
          <Brand title="Next.js" progress="80">
            <SiNextdotjs color={color} size={48} />
          </Brand>
          <Brand title="Vue.js" progress="90">
            <SiVuedotjs color="default" size={48} />
          </Brand>
          <Brand title="Node.js" progress="70">
            <SiNodedotjs color="default" size={48} />
          </Brand>
          <Brand title=".NET" progress="50">
            <SiDotnet color="default" size={48} />
          </Brand>
          <Brand title="Django" progress="75">
            <SiDjango color={djangoColor} size={48} />
          </Brand>
          <Brand title="Flutter" progress="50">
            <SiFlutter color="default" size={48} />
          </Brand>
        </StackSection>
        <StackSection title="Web Development">
          <Brand title="HTML5" progress="90">
            <SiHtml5 color="default" size={48} />
          </Brand>
          <Brand title="CSS3" progress="90">
            <SiCss3 color="default" size={48} />
          </Brand>
          <Brand title="Tailwind" progress="90">
            <SiTailwindcss color="default" size={48} />
          </Brand>
          <Brand title="Bootstrap" progress="90">
            <SiBootstrap color="default" size={48} />
          </Brand>
          <Brand title="Woocommerce" progress="90">
            <SiWoocommerce color="default" size={48} />
          </Brand>
          <Brand title="WordPress" progress="100">
            <SiWordpress color="default" size={48} />
          </Brand>
          <Brand title="Shopify" progress="70">
            <SiShopify color="default" size={48} />
          </Brand>
        </StackSection>
        <StackSection title="Database">
          <Brand title="MySQL" progress="90">
            <SiMysql color="default" size={48} />
          </Brand>
          <Brand title="MariaDB" progress="90">
            <SiMariadb color={color} size={48} />
          </Brand>
          <Brand title="PostgreSQL" progress="80">
            <SiPostgresql color="default" size={48} />
          </Brand>
          <Brand title="Firebase" progress="75">
            <SiFirebase color="default" size={48} />
          </Brand>
        </StackSection>
        <StackSection title="Tools">
          <Brand title="Github">
            <SiGithub color={color} size={48} />
          </Brand>
          <Brand title="Gitlab">
            <SiGitlab color="default" size={48} />
          </Brand>
          <Brand title="Jira">
            <SiJira color="default" size={48} />
          </Brand>
          <Brand title="Trello">
            <SiTrello color="default" size={48} />
          </Brand>
        </StackSection>
        <StackSection title="Hosting">
          <Brand title="Vercel">
            <SiVercel color={color} size={48} />
          </Brand>
          <Brand title="Amazon AWS">
            <SiAmazonaws color="#EC7211" size={48} />
          </Brand>
          <Brand title="Digital Ocean">
            <SiDigitalocean color="default" size={48} />
          </Brand>
          <Brand title="Google Cloud">
            <SiGooglecloud color="default" size={48} />
          </Brand>
          <Brand title="Plesk">
            <SiPlesk color="default" size={48} />
          </Brand>
        </StackSection>
        <StackSection title="IDE's">
          <Brand title="WebStorm">
            <SiWebstorm color="#5DE4A4" size={48} />
          </Brand>
          <Brand title="PHPStorm">
            <SiPhpstorm color="#B345F1" size={48} />
          </Brand>
          <Brand title="VSCode">
            <SiVisualstudiocode color="default" size={48} />
          </Brand>
          <Brand title="Visual Studio">
            <SiVisualstudio color="default" size={48} />
          </Brand>
        </StackSection>
      </div>
    </div>
  )
}

export default Stack
