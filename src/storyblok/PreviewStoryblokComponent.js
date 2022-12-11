import { useStoryblok } from "@storyblok/react";
import StoryblokComponent from "./StoryblokComponent";

export default function PreviewStoryblokComponent({ resolveRelations }) {
  const story =
    useStoryblok(
      "home",
      {
        version: "draft",
        resolve_relations: resolveRelations,
      },
      {
        resolveRelations,
      }
    ) ?? null;
  let { content, ...rest } = story || {};
  if (!content) {
    return <p>Loading...</p>;
  }
  return <StoryblokComponent blok={content} {...rest} />;
}
