import {
  isPreviewEnv,
  storyblokAcessKey,
  storyblokGraphqlEndpoint,
} from "~/utils/variables";

export default async function fetchClient({ query, variables = {} }) {
  let key =
    typeof window !== "undefined"
      ? window?.ENV?.storyblokAcessKey ?? null
      : storyblokAcessKey;

  if (!key) {
    throw new Error("Unable to acess the acessKey to fetch API");
  }
  try {
    const response = await fetch(storyblokGraphqlEndpoint, {
      method: "POST",
      headers: {
        Token: key,
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
    console.log(error);
    throw new Error("Failed to fetch API");
  }
}
