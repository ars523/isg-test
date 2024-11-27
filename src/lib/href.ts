import {
  IAuthorStory,
  IFeatured,
  IStory,
  IStoryDetails,
} from "@/config/interfaces/interfaces";

const convertToLowerCase = (slug: string) => {
  return slug?.toLowerCase();
};

export const getFeaturedStoryHref = (story: IFeatured) => {
  if (story?.subcategory_slug) {
    return `/${story?.category_slug}/${
      story?.subcategory_slug
    }/${convertToLowerCase(story.news_slug)}`;
  }
  return `/${story?.category_slug}/${convertToLowerCase(story?.news_slug)}`;
};

export const getStoryDetailsTypeHref = (story: IStoryDetails) => {
  if (story?.subcategories?.length > 0) {
    return `/${story?.categories[0]?.slug}/${
      story?.subcategories[0]?.slug
    }/${convertToLowerCase(story?.news_slug)}`;
  }
  return `/${story?.categories[0]?.slug}/${convertToLowerCase(
    story?.news_slug
  )}`;
};

export const getStoryHref = (story: IStory) => {
  if (story?.subcategory_slug) {
    return `/${story?.category_slug}/${
      story.subcategory_slug
    }/${convertToLowerCase(story?.news_slug)}`;
  }
  return `/${story?.category_slug}/${convertToLowerCase(story?.news_slug)}`;
};

export const getAuthorStoryHref = (story: IAuthorStory) => {
  if (story?.subcategory_slug) {
    return `/${story?.category_slug}/${
      story.subcategory_slug
    }/${convertToLowerCase(story?.news_slug)}`;
  }
  return `/${story?.category_slug}/${convertToLowerCase(story?.news_slug)}`;
};

export const mostViewedStoryHref = (story: IStory) => {
  if (story?.type === "web_story") {
    return `/web-stories/${story?.webstory_slug}`;
  } else if (story?.subcategory_slug) {
    return `/${story?.category_slug}/${
      story.subcategory_slug
    }/${convertToLowerCase(story?.news_slug)}`;
  }
  return `/${story?.category_slug}/${convertToLowerCase(story?.news_slug)}`;
};
