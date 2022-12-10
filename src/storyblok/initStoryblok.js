import Page from "~/components/Page";
import Post from "~/components/Post";
import HeroSection from "~/components/HeroSection";
import FeaturedProjectsSection from "~/components/FeaturedProjectsSection";
import FeaturedPostsSection from "~/components/FeaturedPostsSection";
import PostOverview from "~/components/PostOverview";
import { storyblokInit, apiPlugin } from "@storyblok/react";
export const components = {
  Page,
  Post,
  HeroSection,
  FeaturedProjectsSection,
  FeaturedPostsSection,
  PostOverview,
};
export default function initStoryblok(storyblokAcessKey) {
  storyblokInit({
    accessToken: storyblokAcessKey,
    use: [apiPlugin],
    components,
  });
}
