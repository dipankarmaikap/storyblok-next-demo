import { getStoryblokApi } from "@storyblok/react";
import { isPreviewEnv, storyblokAcessKey } from "~/utils/variables";
import initStoryblok from "./initStoryblok";

export default async function getStoryPageData({ resolveRelations, path }) {
  let sbParams = {
    version: isPreviewEnv ? "draft" : "published", // or 'published'
    resolve_relations: resolveRelations,
  };
  let full_path = `cdn/stories/${path}`;
  let data = await getStoryBlokData({
    path: full_path,
    sbParams,
  });
  return data;
}

export async function getStoryBlokData({ path, sbParams }) {
  initStoryblok(storyblokAcessKey);
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(path, sbParams);
  return data;
}
