"use client";
import { LanguageContextValue } from "@/type";
import { createContext } from "react";

const LanguageContext = createContext<LanguageContextValue>({
  lang: "bn",
  setLang: () => {},
});

export default LanguageContext;
