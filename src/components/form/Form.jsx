import { storyblokEditable } from "@storyblok/js";
import StoryblokComponent from "~/storyblok/StoryblokComponent";
export default function Form({ blok }) {
  let editable = blok?._editable ? storyblokEditable(blok) : {};
  let { title, description } = blok;
  return (
    <section {...editable} className="max-w-screen-sm mx-auto mt-8 form px-4">
      <header className="text-center">
        <h1 className="post text-5xl lg:text-7xl font-black">{title}</h1>
        <p className="text-xl font-semibold my-8">{description}</p>
      </header>
      <form action="">
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </form>
    </section>
  );
}
