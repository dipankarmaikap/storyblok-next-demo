import StoryblokComponent from "./StoryblokComponent";

export default function ProdStoryblokComponent({ story }) {
  let { content, ...rest } = story || {};
  return <StoryblokComponent blok={content} {...rest} />;
}
