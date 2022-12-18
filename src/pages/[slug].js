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

export default function CatchAllPage({ story, slug }) {
  return (
    <Fragment>
      {isPreviewEnv ? (
        <PreviewStoryblokComponent
          resolveRelations={resolveRelations}
          initialStory={story}
          fetchFunction={getPageDataBySlug}
          fetchFunctionProps={{ resolveRelations, slug }}
        />
      ) : (
        <ProdStoryblokComponent story={story} />
      )}
    </Fragment>
  );
}

export async function getStaticProps({ params: { slug } }) {
  let story = await getPageDataBySlug({ slug, resolveRelations });
  if (!story) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }
  return {
    props: {
      story: story ? story : false,
      slug,
      key: story ? story.id : false,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
