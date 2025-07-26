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
