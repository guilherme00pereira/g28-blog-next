import { Outfit } from '@next/font/google'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
const outfit = Outfit({
  subsets: ['latin'],
})
const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className={`${outfit.className} flex h-screen flex-col justify-between font-sans`}>
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="ml-5 mt-5 h-20 bg-gradient-to-r from-sky-600 to-cyan-400 bg-clip-text text-6xl font-semibold text-transparent">
                  {siteMetadata.headerTitle}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-xl leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
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
