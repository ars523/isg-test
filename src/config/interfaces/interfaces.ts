import { StaticImageData } from "next/image";

export interface IAuthor {
  id: number;
  author_name: string;
  author_status: boolean;
}

export type TStory =
  | "Video Story"
  | "Story"
  | "video_story"
  | "web_story"
  | "add_story";

export interface webStoryImage {
  id: number;
  meta: {
    type: string;
  };
  title: string;
  image: {
    id: 57;
    meta: {
      type: string;
      detail_url: string;
      download_url: StaticImageData;
    };
    title: string;
  };
  caption: string;
}

// export interface IWebStory {
//   id: number;
//   title: string;
//   alternative_title: string;
//   type: TStory;
//   excerpt: string;
//   category: string;
//   story_thumbnail?: {
//     url: StaticImageData | string;
//   };
//   webstory_slug: string;
//   web_gallery_images: webStoryImage[];
// }

export interface IWebStory {
  id: number;
  title: string;
  meta: {
    first_published_at: string;
  };
  story_thumbnail: {
    meta: {
      download_url: string;
    };
  };
  subcategories: ICategory[];
  categories: ICategory[];
  webstory_slug: string;
}

export interface TDisplayTag {
  name: string;
  slug: string;
  id: number;
  tagdescription: string;
  meta_title: string;
  meta_descriptions: string;
}

export interface IStory {
  id: number;
  title: string;
  alternative_title: string;
  type: TStory;
  excerpt: string;
  category: string;
  blog_image?: {
    url: StaticImageData | string;
    download_url: StaticImageData | string;
    focal_point_x: number | null;
    focal_point_y: number | null;
  };

  photo_thumbnail?: {
    url: StaticImageData | string;
    focal_point_x: number | null;
    focal_point_y: number | null;
  };
  story_thumbnail?: {
    url: StaticImageData | string;
    focal_point_x: number | null;
    focal_point_y: number | null;
  };
  video_thumbnail?: {
    url: StaticImageData | string;
    focal_point_x: number | null;
    focal_point_y: number | null;
  };
  blog_authors: IAuthor[];
  subcategory_slug: string | null;
  category_slug: string;
  news_slug: string;
  first_published_at: string;
  webstory_slug: string;
  display_tags?: TDisplayTag[];
  is_live_news?: boolean;
  highlight: string;
  // story_type: TStory;
}

export interface IAuthorStory {
  name: string;
  author_img_url: string;
  description: string;
  title: string;
  excerpt: string;
  blog_image_url: string;
  first_published_at: string;
  category_slug: string;
  subcategory_slug?: string | null;
  news_slug: string;
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  meta_title: string;
  watermark: string;
  meta_discriptions: string;
}

export interface IFeatured {
  id: number;
  featured_item_id: number;
  sort_order: number;
  title: string;
  img_url: string;
  img_title: string;
  news_slug: string;
  excerpt: string;
  category_slug: string;
  subcategory_slug: string | null;
  story_type: TStory;
  featured_name: number;
  display_tags?: string;
  is_live_news?: boolean;
  first_published_at: string;
  highlight: string;
}

export interface ITemplate {
  id: number;
  template_name: string;
  stories: IStory[];
  template_order_number: string;
  category: ICategory;
}

export interface ITag {
  name: string;
  slug: string;
  id: number;
  tagtitle: string;
  tagdescription: string;
}

export interface IStoryDetails {
  title: string;
  alternative_title: string;
  watermark: string;
  excerpt: string;
  sub_heading: string;
  highlight: string;
  content?: string;
  content2?: string;
  blog_image?: {
    download_url: string;
    caption: string;
  };
  alternative_blog_image?: {
    download_url: string;
    caption: string;
  };
  photo_thumbnail?: {
    download_url: string;
    caption: string;
  };
  video_thumbnail?: {
    url: string;
  };
  blog_authors: IAuthor[];
  tags: ITag[];
  categories: ICategory[];
  subcategories: ICategory[];
  meta: {
    first_published_at: string;
    last_published_at: string;
    type: "blog.PhotoStory";
    search_description: string;
    seo_title: string;
  };
  story_type: TStory;
  news_slug: string;
  display_tags?: TDisplayTag[];
  is_live_news?: boolean;

  gallery_images?: {
    image: {
      meta: {
        download_url: string;
      };
      title: string;
    };
    caption: string;
    content: string;
  }[];

  live_news_content_story?: {
    id: number;
    title: string;
    image?: {
      url: string;
      width: number;
      height: number;
    };
    content: string;
    image_captions: string;
    created_at: string;
  }[];
}

export interface IMenuItems {
  open_in_new_tab: boolean;
  link_title: string;
  link_url: string;
  category: {
    name: string;
    slug: string;
  };
  menu_subcategories: {
    subcategory: {
      name: string;
      slug: string;
    };
  }[];
}

export interface IMenu {
  slug: string;
  menu_items: IMenuItems[];
}
