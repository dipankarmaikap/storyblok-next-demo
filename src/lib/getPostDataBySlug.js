import fetchClient from "./fetchClient";
import { PostBySlug } from "./graphql/PostBySlug";

export default async function getPostDataBySlug({ url }) {
  let data =
    (await fetchClient({
      query: PostBySlug,
      variables: {
        slug: `posts/${url}`,
      },
    })) ?? null;

  let story = data?.PostItem ?? null;

  return story;
}
