import { Content } from "@prismicio/client";

export type BlogSlice = Content.BlogSlice;

export const BlogModel = {
  type: "SharedSlice",
  name: "Blog",
  description: "Blog Section",
  variations: [
    {
      id: "default",
      name: "Default",
      docURL: "...",
      version: "initial",
      description: "Default",
      primary: {
        heading: {
          type: "StructuredText",
          config: {
            label: "Section Heading",
            placeholder: "Latest Blog Posts",
            allowTargetBlank: true,
            single: "heading2",
          },
        },
        description: {
          type: "StructuredText",
          config: {
            label: "Section Description",
            placeholder: "Discover my latest thoughts and insights",
            allowTargetBlank: true,
            single: "paragraph",
          },
        },
      },
      items: {
        post_thumbnail: {
          type: "Image",
          config: {
            label: "Post Thumbnail",
            constraint: {
              width: 800,
              height: 600,
            },
            thumbnails: [],
          },
        },
        post_category: {
          type: "Text",
          config: {
            label: "Post Category",
            placeholder: "Technology",
          },
        },
        post_title: {
          type: "Text",
          config: {
            label: "Post Title",
            placeholder: "How to Build Modern Websites",
          },
        },
        post_excerpt: {
          type: "Text",
          config: {
            label: "Post Excerpt",
            placeholder: "A brief description of the blog post...",
          },
        },
        post_date: {
          type: "Date",
          config: {
            label: "Post Date",
            placeholder: "Select post date",
          },
        },
        reading_time: {
          type: "Number",
          config: {
            label: "Reading Time (minutes)",
            placeholder: "5",
          },
        },
        post_link: {
          type: "Link",
          config: {
            label: "Post Link",
            placeholder: "Select or enter post URL",
            allowTargetBlank: true,
          },
        },
        author_name: {
          type: "Text",
          config: {
            label: "Author Name",
            placeholder: "John Doe",
          },
        },
        author_image: {
          type: "Image",
          config: {
            label: "Author Image",
            constraint: {
              width: 100,
              height: 100,
            },
            thumbnails: [],
          },
        },
      },
    },
  ],
};
