import { IStory, IStoryDetails } from "@/config/interfaces/interfaces";

export const getImageUrl = (story: IStory) => {
  return (
    story?.blog_image?.url ||
    story?.blog_image?.download_url ||
    story?.photo_thumbnail?.url ||
    story?.story_thumbnail?.url ||
    story?.video_thumbnail?.url ||
    ""
  );
};
export const getStoryDetailsImageUrl = (story: IStoryDetails) => {
  return (
    story?.blog_image?.download_url ||
    story?.video_thumbnail?.url ||
    story.photo_thumbnail?.download_url ||
    ""
  );
};
