
const EnrollButton = ({ content }: { content: { name: string, value: string } }) => {
    return (
        <button className="bg-two inline-block w-full py-3 text-white rounded-lg shadow-one border-b-3 border-black mb-5 hover:bg-three transition-colors cursor-pointer " value={content.value}>{content.name}</button>
    )
}

export default EnrollButton