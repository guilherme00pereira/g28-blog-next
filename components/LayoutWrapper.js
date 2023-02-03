import { Outfit } from '@next/font/google'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
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
                <div className="linear-blue ml-5 mt-5 h-20 text-7xl font-semibold">
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
                  className="p-1 font-medium text-slate-700 dark:text-gray-100 sm:p-4"
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
