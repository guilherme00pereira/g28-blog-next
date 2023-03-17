import SectionTitle from '@/components/SectionTitle';

const StackSection = ({title, children}) => {
    return (
        <div className="flex flex-col items-center py-12 w-10/12">
            <SectionTitle title={title} subtitle />
            <div className='flex py-6'>
                {children}
            </div>
        </div>
    );
};

export default StackSection;