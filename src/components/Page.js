import { storyblokEditable } from "@storyblok/react";
import StoryblokComponent from "~/storyblok/StoryblokComponent";

const Page = ({ blok }) => {
  let editable = blok?._editable ? storyblokEditable(blok) : {};

  return (
    <main {...editable}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
