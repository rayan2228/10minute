import Image from "next/image"

const CourseChecklist = ({ content }: { content: { color: string, icon: string, id: string, list_page_visibility: boolean, text: string }[] }) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className='text-xl font-semibold text-one'>এই কোর্সে যা থাকছে</h1>
            {
                content.map((item) => (
                    <div key={item.id} className={`flex gap-2 text-[${item.color}] text-base`}>
                        <Image src={item.icon} alt={item.text} width={24} height={24} />
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CourseChecklist