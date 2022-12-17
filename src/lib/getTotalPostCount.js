import graphqlFetchClient from "./graphqlFetchClient";

export default async function getTotalPostCount() {
  let data =
    (await graphqlFetchClient({
      query: `{
        PostItems {
          total
        }
      }
      `,
    })) ?? null;

  return data ? data?.PostItems?.total : 0;
}
