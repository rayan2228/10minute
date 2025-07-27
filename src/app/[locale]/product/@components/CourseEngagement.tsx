import FileDownloadBtn from '@/shared components/FileDownloadBtn'
import { SectionData } from '@/type'
import Image from 'next/image'

const CourseEngagement = ({ content }: SectionData) => {
  return (
    <div className={`order-${content.order_idx}`}>
      <div className=" flex flex-col gap-4 ">
        {
          content.values.map((item) => (
            <div key={item.id} style={{ backgroundImage: `url(${item.background.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='rounded-lg p-8 flex  gap-3 justify-between items-center'>
              <div className='flex flex-col gap-4'>
                <Image src={item.top_left_icon_img} alt={item.title} width={150} height={40} />
                <h4 style={{ color: item.title_color }} className='text-xl w-[300px] font-semibold'>{item.title}</h4>
                <p style={{ color: item.description_color }} className='text-base w-[320px]'>{item.description}</p>
                <FileDownloadBtn item={item.cta} />
              </div>
              <div className='w-[48%]'>
                <Image src={item.thumbnail} className='w-full' alt={item.title} width={200} height={200} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CourseEngagement