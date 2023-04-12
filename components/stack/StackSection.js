import SectionTitle from '@/components/SectionTitle'

const StackSection = ({ title, children }) => {
  return (
    <div className="flex w-full flex-col items-center py-6">
      <SectionTitle title={title} subtitle />
      <div className="flex w-full flex-wrap justify-center py-2 xl:w-10/12">{children}</div>
    </div>
  )
}

export default StackSection
