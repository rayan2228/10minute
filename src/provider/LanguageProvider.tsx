"use client"
import LanguageContext from "@/context"
import { useState } from "react"

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<string>('bn')
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
    )
}

export default LanguageProvider