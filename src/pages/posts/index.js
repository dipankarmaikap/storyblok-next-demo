import getPostsArchive from "~/lib/getPostsArchive";
import PreviewStoryblokComponent from "~/storyblok/PreviewStoryblokComponent";
import ProdStoryblokComponent from "~/storyblok/ProdStoryblokComponent";
import { isPreviewEnv } from "~/utils/variables";

const resolveRelations = [];

export default function PostArchive({ story }) {
  return (
    <div>
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
    </div>
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
