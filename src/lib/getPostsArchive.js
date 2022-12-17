import initStoryblok from "~/storyblok/initStoryblok";
import { isPreviewEnv } from "~/utils/variables";
import getTotalPostCount from "./getTotalPostCount";

export default async function getPostsArchive(props) {
  let { pageNo = 1, resolveRelations = [] } = props || {};
  let storyblokApi = initStoryblok();

  //Get post per page info from site config

  let slug = "site-config";
  let sbParams = {
    version: isPreviewEnv ? "draft" : "published", // or 'published'
    resolve_relations: resolveRelations,
  };
  let { data: siteConfig } = await storyblokApi.get(
    `cdn/stories/${slug}`,
    sbParams
  );
  let max_post_per_page = siteConfig?.story?.content?.max_post_per_page ?? 5;
  let postPerPage = parseInt(max_post_per_page);

  let total = await getTotalPostCount();

  const maxPossiblePages = Math.ceil(total / postPerPage);

  let pagination = {
    maxPossiblePages,
    pageNo,
  };

  if (pageNo > maxPossiblePages) {
    console.log("Throw 404");
    return null;
  }
  //Get posts page details
  let { data: postOverview } = await storyblokApi.get(
    `cdn/stories/posts`,
    sbParams
  );

  //Get paginated posts
  let { data: allPosts } = await storyblokApi.get(`cdn/stories/`, {
    ...sbParams,
    page: pageNo,
    per_page: postPerPage,
    starts_with: "posts/",
    filter_query: {
      component: {
        not_in: "PostOverview",
      },
    },
  });
  let posts = allPosts?.stories ?? [];
  let story = postOverview?.story || {};

  return story
    ? {
        ...story,
        posts,
        pagination,
      }
    : null;
}
