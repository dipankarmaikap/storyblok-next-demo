import Page from "~/components/Page";
import HeroSection from "~/components/HeroSection";
import FeaturedProjectsSection from "~/components/FeaturedProjectsSection";
import FeaturedPostsSection from "~/components/FeaturedPostsSection";
import { storyblokInit, apiPlugin } from "@storyblok/js";
import { isPreviewEnv, storyblokAcessKey } from "~/utils/variables";
export const components = {
  Page,
  HeroSection,
  FeaturedProjectsSection,
  FeaturedPostsSection,
};
export default function initStoryblok() {
  let key =
    typeof window !== "undefined"
      ? window?.ENV?.storyblokAcessKey ?? null
      : storyblokAcessKey;

  const { storyblokApi } = storyblokInit({
    accessToken: key,
    use: [apiPlugin],
    apiOptions: { https: true },
    components,
    bridge: isPreviewEnv,
  });

  return storyblokApi;
}
