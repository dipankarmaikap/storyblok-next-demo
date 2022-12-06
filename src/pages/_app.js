import "~/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "~/components/Page";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import FeaturedProjectsSection from "~/components/FeaturedProjectsSection";
import FeaturedPostsSection from "~/components/FeaturedPostsSection";
import { Fragment } from "react";

const components = {
  page: Page,
  HeroSection: HeroSection,
  FeaturedProjectsSection: FeaturedProjectsSection,
  FeaturedPostsSection: FeaturedPostsSection,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACESS_KEY,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
