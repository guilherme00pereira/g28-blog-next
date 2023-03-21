import { testimonialsData } from '@/data/testimonialsData'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='flex flex-wrap justify-evenly w-full dark:text-slate-400'>
      {testimonialsData.map((testimonial, index) => {
        return (
          <div key={index} className='card-wrapper m-4 flex flex-col rounded-xl p-4 w-[300px]'>
            <a href='https://www.99freelas.com.br/user/guilherme00pereira' target="_blank">
              <div className='flex justify-start items-center'>
                {testimonial.thumb &&
                  <Image src={testimonial.thumb} alt={testimonial.customer} width="50" height="50" className='rounded-3xl' />
                }
                <h6 className='font-bold ml-6'>{testimonial.customer}</h6>
              </div>
              <p className='mt-5'>"{testimonial.text}"</p>
            </a>
          </div>
        )
      })}
    </div >
  )
}

export default Testimonials
