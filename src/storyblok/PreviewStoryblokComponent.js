import StoryblokComponent from "./StoryblokComponent";
import useStoryblok from "./useStoryblok";

export default function PreviewStoryblokComponent({
  resolveRelations,
  fetchFunction,
  fetchFunctionProps,
}) {
  const story = useStoryblok({
    bridgeOptions: { resolveRelations },
    fetchFunction,
    fetchFunctionProps,
  });

  let { content, ...rest } = story || {};

  if (!content) {
    return (
      <p className="bg-gray-200 p-4 text-xl">
        Loading updated page info. This is only for preview env. On production
        version there will be no flicker. This is necessery to see the changes
        live.
      </p>
    );
  }
  return <StoryblokComponent blok={content} {...rest} />;
}
