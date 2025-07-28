"use client"

const FileDownloadBtn = ({ item }: { item: any }) => {
    return (
        <button
            onClick={() => window.open(item.clicked_url, "_blank")}
            className="bg-two w-full max-w-xs py-3 px-4 text-white rounded-lg mb-5 hover:bg-three transition-colors duration-200 cursor-pointer text-center"
        >
            {item.text}
        </button>
    )
}

export default FileDownloadBtn
