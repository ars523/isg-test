import { IStory, IStoryDetails } from "@/config/interfaces/interfaces";

export const getFocalPoints = (story: IStory) => {
  if (story?.blog_image) {
    return {
      x: story.blog_image.focal_point_x,
      y: story.blog_image.focal_point_y,
    };
  } else if (story?.photo_thumbnail) {
    return {
      x: story.photo_thumbnail.focal_point_x,
      y: story.photo_thumbnail.focal_point_y,
    };
  } else if (story?.story_thumbnail) {
    return {
      x: story.story_thumbnail.focal_point_x,
      y: story.story_thumbnail.focal_point_y,
    };
  } else if (story?.video_thumbnail) {
    return {
      x: story.video_thumbnail.focal_point_x,
      y: story.video_thumbnail.focal_point_y,
    };
  } else {
    return { x: null, y: null };
  }
  //   return (
  //     story?.blog_image?.url ||
  //     story?.blog_image?.download_url ||
  //     story?.photo_thumbnail?.url ||
  //     story?.story_thumbnail?.url ||
  //     story?.video_thumbnail?.url ||
  //     ""
  //   );
};
