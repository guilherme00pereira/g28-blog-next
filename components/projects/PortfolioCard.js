import Image from '../Image'
import Link from '../Link'
const Card = ({ title, description, imgSrc, href, stack }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${imgSrc && 'h-full'
        }  overflow-hidden rounded-md card-wrapper`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center"
              width={600}
              height={290}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center"
            width={600}
            height={290}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-semibold leading-8 tracking-wider">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</div>
        {stack &&
          <div>
            <h4>Worked with:</h4>
            {stack.map((item, index) => (
              <span key={index} className="inline-block py-1 px-2 rounded-full text-xs font-semibold text-gray-500 dark:text-gray-400">
                {item}
              </span>
            ))}
          </div>
        }
        {/* {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )} */}
      </div>
    </div>
  </div>
)
export default Card
