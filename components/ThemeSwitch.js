import { useEffect } from 'react'
import { useTheme } from 'next-themes'

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`
const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const toggleTheme = () => {
    const switchToggle = document.querySelector('#switch-toggle')
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
    if (theme === 'light') {
      switchToggle.classList.remove('bg-amber-500', 'translate-x-1')
      switchToggle.classList.add('bg-sky-700', 'translate-x-4')
      setTimeout(() => {
        switchToggle.innerHTML = darkIcon
      }, 250)
    } else {
      switchToggle.classList.add('bg-amber-500', 'translate-x-1')
      switchToggle.classList.remove('bg-sky-700', 'translate-x-4')
      setTimeout(() => {
        switchToggle.innerHTML = lightIcon
      }, 250)
    }
  }

  useEffect(() => toggleTheme(), [])

  return (
    <button
      className="flex h-6 w-10 items-center rounded-full bg-gray-200 shadow transition duration-300 focus:outline-none"
      onClick={toggleTheme}
    >
      <div
        id="switch-toggle"
        className="relative h-5 w-5 transform rounded-full bg-amber-500 p-1 text-white transition duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
    </button>
  )
}
export default ThemeSwitch
