import { Fragment } from "react";
import getPostsArchive from "~/lib/getPostsArchive";
import PreviewStoryblokComponent from "~/storyblok/PreviewStoryblokComponent";
import ProdStoryblokComponent from "~/storyblok/ProdStoryblokComponent";
import { isPreviewEnv } from "~/utils/variables";

const resolveRelations = [];

export default function PostArchive({ story }) {
  return (
    <Fragment>
      {isPreviewEnv ? (
        <PreviewStoryblokComponent
          resolveRelations={resolveRelations}
          initialStory={story}
          fetchFunction={getPostsArchive}
          fetchFunctionProps={{ resolveRelations }}
        />
      ) : (
        <ProdStoryblokComponent story={story} />
      )}
    </Fragment>
  );
}

export async function getStaticProps() {
  let story = await getPostsArchive();
  return {
    props: {
      story,
      key: "posts-page",
    },
  };
}
