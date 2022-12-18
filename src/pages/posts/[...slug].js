import React, { Fragment } from "react";
import getPostDataBySlug from "~/lib/getPostDataBySlug";
import getPostsArchive from "~/lib/getPostsArchive";
import PreviewStoryblokComponent from "~/storyblok/PreviewStoryblokComponent";
import ProdStoryblokComponent from "~/storyblok/ProdStoryblokComponent";
import { isPreviewEnv } from "~/utils/variables";

const resolveRelations = ["Post.Categories", "Post.Tags"];

export default function PostsPage({ story, paginated, url, pageNo }) {
  let fetchFunction = paginated ? getPostsArchive : getPostDataBySlug;
  let fetchFunctionProps = paginated ? { pageNo } : { url, resolveRelations };

  return (
    <Fragment>
      {isPreviewEnv ? (
        <PreviewStoryblokComponent
          resolveRelations={resolveRelations}
          initialStory={story}
          fetchFunction={fetchFunction}
          fetchFunctionProps={fetchFunctionProps}
        />
      ) : (
        <ProdStoryblokComponent story={story} />
      )}
    </Fragment>
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
    let story = await getPostsArchive({ pageNo: pageNumber });
    if (!story) {
      return {
        notFound: true,
        revalidate: 60,
      };
    }
    return {
      props: {
        story,
        paginated,
        pageNo: pageNumber,
        key: JSON.stringify(slug),
      },
    };
  }
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
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
