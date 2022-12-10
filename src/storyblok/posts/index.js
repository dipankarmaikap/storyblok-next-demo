import { useStoryblokState } from "@storyblok/react";
import getStoryPageData, {
  getStoryBlokData,
} from "~/storyblok/getStoryBlokData";
import StoryblokComponent from "~/storyblok/StoryblokComponent";
import { isPreviewEnv } from "~/utils/variables";

const resolveRelations = [];

export default function Home({ story }) {
  let storyCopy = story;
  if (isPreviewEnv) {
    story = useStoryblokState(story, {
      resolveRelations,
    });
  }
  let { content, ...rest } = story;

  let p = { ...rest, posts: storyCopy.posts };
  return (
    <div className="posts-page">
      <StoryblokComponent blok={story.content} {...p} />
    </div>
  );
}

export async function getStaticProps() {
  let path = "posts";
  let data = await getStoryPageData({
    path,
    resolveRelations,
  });
  if (data) {
    let per_page = data?.story?.content?.per_page_post ?? 10;
    let sbParams = {
      content_type: "Post",
      per_page: parseInt(per_page),
      page: 1,
    };
    let getAllPosts = await getStoryBlokData({
      path: "cdn/stories",
      sbParams,
    });
    let posts = getAllPosts?.stories ?? [];
    return {
      props: {
        story: data ? { ...data.story, posts } : false,
        key: data ? data.story.id : false,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
