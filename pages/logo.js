import siteMetadata from '@/data/siteMetadata'

const Logo = () => {
  return (
    <div>
      <div className="linear-blue w-[400px] ml-5 h-[300px] text-[200px] font-bold">
        {siteMetadata.headerTitle}
      </div>
    </div>
  )
}

export default Logo
