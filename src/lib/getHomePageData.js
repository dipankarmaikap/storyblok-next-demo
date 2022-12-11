import fetchClient from "./fetchClient";
import { HomePageQuery } from "./graphql/HomePageQuery";

export default async function getHomePageData() {
  let data =
    (await fetchClient({
      query: HomePageQuery,
    })) ?? null;

  return data ? data?.PageItem : null;
}
