export interface CourseData {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  type: string;
  duration: string;
  instructor_name: string;
  [key: string]: any;
}

export interface SectionItem {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}

export interface AllSectionData {
  section: SectionItem[];
}

export interface SectionData {
  content: SectionItem;
}

export type LanguageContextValue = {
  lang: string;
  setLang: (lang: string) => void;
};
