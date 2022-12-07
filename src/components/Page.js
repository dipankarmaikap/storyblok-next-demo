import { storyblokEditable } from "@storyblok/react";
import StoryblokComponent from "~/storyblok/StoryblokComponent";

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
