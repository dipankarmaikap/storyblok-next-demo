import React from "react";
import getPostDataBySlug from "~/lib/getPostDataBySlug";
import PreviewStoryblokComponent from "~/storyblok/PreviewStoryblokComponent";
import ProdStoryblokComponent from "~/storyblok/ProdStoryblokComponent";
import { isPreviewEnv } from "~/utils/variables";

const resolveRelations = ["Post.Categories", "Post.Tags"];

export default function PostsPage({ story, url }) {
  return (
    <div className="article-page">
      {isPreviewEnv ? (
        <PreviewStoryblokComponent
          resolveRelations={resolveRelations}
          initialStory={story}
          fetchFunction={getPostDataBySlug}
          fetchFunctionProps={{ url, resolveRelations }}
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
        url: `posts/${url}`,
        resolveRelations,
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
        url: `posts/${url}`,
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
