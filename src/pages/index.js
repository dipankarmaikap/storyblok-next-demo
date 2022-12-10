import { useStoryblokState } from "@storyblok/react";
import fetchClient from "~/lib/fetchClient";
import { HomePageQuery } from "~/lib/graphql/HomePageQuery";
import StoryblokComponent from "~/storyblok/StoryblokComponent";
import { isPreviewEnv } from "~/utils/variables";
const resolveRelations = ["FeaturedPostsSection.posts"];

export default function about({ story }) {
  if (isPreviewEnv) {
    story = useStoryblokState(story, {
      resolveRelations,
    });
  }
  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
export async function getStaticProps() {
  let data =
    (await fetchClient({
      query: HomePageQuery,
    })) ?? null;
  return {
    props: {
      story: data ? data?.PageItem : null,
    },
  };
}
