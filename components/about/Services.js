import { servicesData } from "@/data/servicesData";
import { SiWordpress } from "@icons-pack/react-simple-icons";

const getIcon = (icon) => {
    switch (icon) {
        case 'wp':
            return <SiWordpress color="default" size={64} />
        default: 
            return null;
    }
}

const Services = () => {
    return (
        <div className='flex flex-wrap justify-evenly w-full card-wrapper mb-10 p-6 dark:text-slate-400'>
            {servicesData.map((service, index) => {
                return (
                    <div key={index} className='m-4 flex flex-col rounded-xl p-4 basis-1/3'>
                        {getIcon(service.thumb)}
                        <h6 className='my-2 font-bold text-2xl dark:text-sky-200'>{service.title}</h6>
                        <p className='my-2'>{service.text}</p>
                    </div>
                )
            }
            )}
        </div>
    );
};

export default Services;