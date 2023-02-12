import PHP from './php.svg'

const components = {
  php: PHP,
}

const BrandIcons = ({ kind, size = 8 }) => {
  const BrandSvg = components[kind]

  return (
    <div>
      <span className="sr-only">{kind}</span>
      <BrandSvg
        className={`fill-current text-gray-700 hover:text-${kind} dark:text-gray-400 dark:hover:text-${kind} h-${size} w-${size}`}
      />
    </div>
  )
}

export default BrandIcons
