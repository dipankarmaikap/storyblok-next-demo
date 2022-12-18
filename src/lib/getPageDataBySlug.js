import initStoryblok from "~/storyblok/initStoryblok";
import { isPreviewEnv } from "~/utils/variables";
export default async function getPageDataBySlug({
  slug = "home",
  resolveRelations,
}) {
  try {
    let storyblokApi = initStoryblok();
    let sbParams = {
      version: isPreviewEnv ? "draft" : "published", // or 'published'
      resolve_relations: resolveRelations,
    };
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    return data ? data?.story : null;
  } catch (err) {
    return null;
  }
}
