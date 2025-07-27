"use client"
const FileDownloadBtn = ({ item }: { item: any }) => {

    return (
        <button onClick={() => window.open(item.clicked_url, '_blank')} className="bg-two  py-3 text-white rounded-lg   mb-5 hover:bg-three transition-colors cursor-pointer " >{item.text}</button>
    )
}

export default FileDownloadBtn