import SectionTitle from '@/components/SectionTitle'

const StackSection = ({ title, children }) => {
  return (
    <div className="flex w-full flex-col items-center py-12">
      <SectionTitle title={title} subtitle />
      <div className="flex w-10/12 flex-wrap justify-center py-6">{children}</div>
    </div>
  )
}

export default StackSection
