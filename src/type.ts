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

export interface SectionValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface SectionItem {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export interface AllSectionData {
  section: SectionItem[];
}

export interface SectionData {
  content: SectionItem;
}
