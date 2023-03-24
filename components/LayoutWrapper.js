import { Outfit } from '@next/font/google'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'

const outfit = Outfit({
  subsets: ['latin'],
})


const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  const activeStyle = "text-sky-400 border-b-2 border-sky-400"

  return (
    <SectionContainer>
      <div className={`${outfit.className} flex h-screen flex-col justify-between font-sans`}>
        <header className="flex items-center justify-between py-10">
          <div>
            <div className="flex flex-col justify-start">
              <div className="linear-blue mt-5 h-20 text-7xl font-semibold">
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  {siteMetadata.headerTitle}
                </Link>
              </div>
              <div className="ml-3 -mt-3 text-xs text-slate-800 dark:text-gray-300 ">
                by Guilherme Pereira
              </div>
            </div>
          </div>
          <div className="flex items-center text-xl leading-5 tracking-wide">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`font-medium py-2 px-4 ${router.pathname === link.href ? activeStyle : 'text-slate-700 dark:text-gray-100'}`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
export default LayoutWrapper
