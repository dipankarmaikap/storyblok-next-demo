import fetchClient from "~/lib/fetchClient";
import { HomePageQuery } from "~/lib/graphql/HomePageQuery";
import { isPreviewEnv } from "~/utils/variables";
import dynamic from "next/dynamic";
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
          story={story}
        />
      ) : (
        <ProdStoryblokComponent story={story} />
      )}
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
