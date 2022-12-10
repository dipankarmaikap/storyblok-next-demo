import { useStoryblokState } from "@storyblok/react";
import fetchClient from "~/lib/fetchClient";
import { PostBySlug } from "~/lib/graphql/PostBySlug";
import StoryblokComponent from "~/storyblok/StoryblokComponent";
import { isPreviewEnv } from "~/utils/variables";

const resolveRelations = ["Post.Categories", "Post.Tags"];
export default function PostsPage({ story }) {
  if (isPreviewEnv) {
    story = useStoryblokState(story, {
      resolveRelations,
    });
  }
  let { content, ...rest } = story || {};
  return (
    <div className="article-page">
      <StoryblokComponent blok={content} {...rest} />
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
    let data =
      (await fetchClient({
        query: PostBySlug,
        variables: {
          slug: `posts/${url}`,
        },
      })) ?? null;

    let story = data?.PostItem ?? null;

    if (!story) {
      return {
        notFound: true,
        revalidate: 60,
      };
    }
    return {
      props: {
        story,
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
