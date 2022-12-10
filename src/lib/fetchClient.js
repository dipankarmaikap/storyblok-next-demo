import {
  isPreviewEnv,
  storyblokAcessKey,
  storyblokGraphqlEndpoint,
} from "~/utils/variables";

export default async function fetchClient({ query, variables = {} }) {
  if (!storyblokAcessKey) {
    throw new Error("Unable to acess the acessKey to fetch API");
  }
  try {
    const response = await fetch(storyblokGraphqlEndpoint, {
      method: "POST",
      headers: {
        Token: storyblokAcessKey,
        Version: isPreviewEnv ? "draft" : "published",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch API");
  }
}
