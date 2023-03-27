import { testimonialsData } from '@/data/testimonialsData'
import Image from 'next/image'
import CardBox from '@/components/home/CardBox'

const TestimonialsBox = () => {
  return (
    <CardBox title="Testimonials" buttonText="See all testimonials" linkText="/about#testimonials">
      {testimonialsData.slice(0,2).map((testimonial, index) => {
        return (
          <div key={index} className="m-4 flex w-[300px] flex-col rounded-xl p-1">
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
              <p className="mt-5">"{testimonial.text.substring(0,100)}"</p>
            </a>
          </div>
        )
      })}
    </CardBox>
  )
}

export default TestimonialsBox
