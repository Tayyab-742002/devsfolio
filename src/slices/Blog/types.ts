import { Content } from "@prismicio/client";

export interface BlogSlice {
  type: "blog";
  primary: {
    heading: Content.StructuredTextField;
    description: Content.StructuredTextField;
  };
  items: {
    post_thumbnail: Content.ImageField;
    post_category: string;
    post_title: string;
    post_excerpt: string;
    post_date: string;
    reading_time: number;
    post_link: Content.LinkField;
    author_name: string;
    author_image: Content.ImageField;
    reading_progress?: number; // percentage from 0 to 100
  }[];
}
