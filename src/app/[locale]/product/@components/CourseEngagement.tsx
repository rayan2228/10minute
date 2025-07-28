import FileDownloadBtn from '@/shared components/FileDownloadBtn'
import { SectionData } from '@/type'
import Image from 'next/image'

const CourseEngagement = ({ content }: SectionData) => {
  return (
    <div className={`order-${content.order_idx}`}>
      <div className="flex flex-col gap-6">
        {content.values.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundImage: `url(${item.background.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="rounded-lg p-5 sm:p-8 flex flex-col lg:flex-row gap-5 justify-between items-start lg:items-center"
          >
            {/* Left content */}
            <div className="flex flex-col gap-4 w-full lg:w-[52%]">
              <Image
                src={item.top_left_icon_img}
                alt={item.title}
                width={150}
                height={40}
              />
              <h4
                style={{ color: item.title_color }}
                className="text-lg sm:text-xl font-semibold leading-snug"
              >
                {item.title}
              </h4>
              <p
                style={{ color: item.description_color }}
                className="text-sm sm:text-base leading-relaxed"
              >
                {item.description}
              </p>
              <FileDownloadBtn item={item.cta} />
            </div>

            {/* Right thumbnail */}
            <div className="w-full lg:w-[45%]">
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseEngagement
