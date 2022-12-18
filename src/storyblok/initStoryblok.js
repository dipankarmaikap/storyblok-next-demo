import Page from "~/components/Page";
import Post from "~/components/Post";
import Form from "~/components/form";
import Input from "~/components/form/Input";
import PostOverview from "~/components/PostOverview";
import HeroSection from "~/components/HeroSection";
import FeaturedProjectsSection from "~/components/FeaturedProjectsSection";
import FeaturedPostsSection from "~/components/FeaturedPostsSection";
import { storyblokInit, apiPlugin } from "@storyblok/js";
import { isPreviewEnv, storyblokAcessKey } from "~/utils/variables";
export const components = {
  Post,
  Form,
  input: Input,
  PostOverview,
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
