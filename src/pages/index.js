import { isPreviewEnv } from "~/utils/variables";
import dynamic from "next/dynamic";
import getHomePageData from "~/lib/getHomePageData";
const PreviewStoryblokComponent = dynamic(() =>
  import("~/storyblok/PreviewStoryblokComponent")
);
const ProdStoryblokComponent = dynamic(() =>
  import("~/storyblok/ProdStoryblokComponent")
);
const resolveRelations = ["FeaturedPostsSection.posts"];

export default function Home({ story }) {
  return (
    <div>
      {isPreviewEnv ? (
        <PreviewStoryblokComponent
          resolveRelations={resolveRelations}
          initialStory={story}
          fetchFunction={getHomePageData}
          fetchFunctionProps={{ resolveRelations }}
        />
      ) : (
        <ProdStoryblokComponent story={story} />
      )}
    </div>
  );
}

export async function getStaticProps() {
  let story = await getHomePageData({ resolveRelations });
  return {
    props: {
      story: story ? story : false,
      key: story ? story.id : false,
    },
  };
}
