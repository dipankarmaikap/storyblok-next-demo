import { registerStoryblokBridge } from "@storyblok/js";
import { useEffect, useState } from "react";
export default function useStoryblok({
  fetchFunction,
  bridgeOptions = {},
  fetchFunctionProps = {},
}) {
  let [story, setStory] = useState({});
  registerStoryblokBridge(story?.id, (story) => setStory(story), bridgeOptions);

  useEffect(() => {
    async function fetchData() {
      let data = (await fetchFunction(fetchFunctionProps)) ?? null;
      setStory(data ? data : null);
    }
    fetchData();
  }, []);

  return story;
}
