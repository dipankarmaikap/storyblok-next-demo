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

export default function HomePage({ story }) {
  return (
    <div className="home-page">
      {isPreviewEnv ? (
        <PreviewStoryblokComponent
          resolveRelations={resolveRelations}
          initialStory={story}
          fetchFunction={getHomePageData}
        />
      ) : (
        <ProdStoryblokComponent story={story} />
      )}
    </div>
  );
}
export async function getStaticProps() {
  let data = await getHomePageData();
  return {
    props: {
      story: data ?? null,
    },
  };
}
