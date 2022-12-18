import { isPreviewEnv } from "~/utils/variables";
import dynamic from "next/dynamic";
import getPageDataBySlug from "~/lib/getPageDataBySlug";
import { Fragment } from "react";
const PreviewStoryblokComponent = dynamic(() =>
  import("~/storyblok/PreviewStoryblokComponent")
);
const ProdStoryblokComponent = dynamic(() =>
  import("~/storyblok/ProdStoryblokComponent")
);
const resolveRelations = ["FeaturedPostsSection.posts"];

export default function Home({ story }) {
  return (
    <Fragment>
      {isPreviewEnv ? (
        <PreviewStoryblokComponent
          resolveRelations={resolveRelations}
          initialStory={story}
          fetchFunction={getPageDataBySlug}
          fetchFunctionProps={{ resolveRelations }}
        />
      ) : (
        <ProdStoryblokComponent story={story} />
      )}
    </Fragment>
  );
}

export async function getStaticProps() {
  let story = await getPageDataBySlug({ resolveRelations });
  return {
    props: {
      story: story ? story : false,
      key: story ? story.id : false,
    },
  };
}
