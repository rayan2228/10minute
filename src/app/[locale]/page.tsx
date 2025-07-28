import Image from "next/image"
import Link from "next/link"
import Price from "./product/@components/Price"
import Title from "@/shared components/Title"

export default async function Page() {
  return (
    <section className="mt-10">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-4">
          <Title title="Our Courses" />
          <div className="flex items-center justify-between ">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl xl:w-1/4 lg:w-1/4 md:w-1/3 sm:w-1/2">
              <Image className="h-48 w-full object-cover object-end" src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png" width={500} height={500} alt="IELTS Course by Munzereen Shahid" />
              <div className="px-6 py-4">
                <h4 className="mt-2 font-semibold text-2xl leading-tight hover:text-two transition-colors"><Link href={`/product/ielts-course`}>IELTS Course by Munzereen Shahid</Link></h4>
                <div className="mt-1">
                  <Price />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}