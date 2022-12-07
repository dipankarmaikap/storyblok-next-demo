import Page from "~/components/Page";
import HeroSection from "~/components/HeroSection";
import FeaturedProjectsSection from "~/components/FeaturedProjectsSection";
import FeaturedPostsSection from "~/components/FeaturedPostsSection";
import { storyblokInit, apiPlugin } from "@storyblok/react";
export const components = {
  page: Page,
  HeroSection: HeroSection,
  FeaturedProjectsSection: FeaturedProjectsSection,
  FeaturedPostsSection: FeaturedPostsSection,
};
export default function initStoryblok(storyblokAcessKey) {
  storyblokInit({
    accessToken: storyblokAcessKey,
    use: [apiPlugin],
    components,
  });
}
