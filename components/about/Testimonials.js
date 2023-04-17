import { testimonialsData } from '@/data/testimonialsData'
import Image from 'next/image'
import Button99 from '@/components/Button99'

const Testimonials = () => {
  return (
    <div id="#testimonials" className="flex w-full flex-wrap justify-evenly dark:text-slate-400">
      {testimonialsData.map((testimonial, index) => {
        return (
          <div key={index} className="card-wrapper m-4 flex w-[300px] flex-col rounded-xl p-4">
            <a
              href="https://www.99freelas.com.br/user/guilherme00pereira"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-start">
                {testimonial.thumb && (
                  <Image
                    src={testimonial.thumb}
                    alt={testimonial.customer}
                    width="50"
                    height="50"
                    className="rounded-3xl"
                  />
                )}
                <h6 className="ml-6 font-bold">{testimonial.customer}</h6>
              </div>
              <p className="mt-5">"{testimonial.text}"</p>
            </a>
          </div>
        )
      })}
      <Button99 text="See more testimonials" />
    </div>
  )
}

export default Testimonials
