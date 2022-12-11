import { isPreviewEnv } from "~/utils/variables";
import dynamic from "next/dynamic";
import getPostDataBySlug from "~/lib/getPostDataBySlug";
const PreviewStoryblokComponent = dynamic(() =>
  import("~/storyblok/PreviewStoryblokComponent")
);
const ProdStoryblokComponent = dynamic(() =>
  import("~/storyblok/ProdStoryblokComponent")
);
const resolveRelations = ["Post.Categories", "Post.Tags"];
export default function PostsPage({ story, url }) {
  return (
    <div className="article-page">
      {isPreviewEnv ? (
        <PreviewStoryblokComponent
          resolveRelations={resolveRelations}
          initialStory={story}
          fetchFunction={getPostDataBySlug}
          fetchFunctionProps={{ url }}
        />
      ) : (
        <ProdStoryblokComponent story={story} />
      )}
    </div>
  );
}
export async function getStaticProps({ params: { slug } }) {
  const url = slug[0];
  const paginated = slug[0] === "page";
  const pageNumber = parseInt(slug[slug.length - 1]);

  if (paginated && pageNumber === 1) {
    return {
      redirect: {
        destination: "/posts",
        permanent: true,
      },
    };
  }
  if (paginated && !pageNumber) {
    return {
      notFound: true,
    };
  }
  if (paginated) {
    return {
      props: {
        story: null,
        key: JSON.stringify(slug),
      },
    };
  } else {
    let story =
      (await getPostDataBySlug({
        url,
      })) ?? null;

    if (!story) {
      return {
        notFound: true,
        revalidate: 60,
      };
    }
    return {
      props: {
        story,
        url,
        key: JSON.stringify(slug),
      },
    };
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
