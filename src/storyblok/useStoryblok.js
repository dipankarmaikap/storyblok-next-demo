import { registerStoryblokBridge } from "@storyblok/js";
import { useEffect, useState } from "react";
export default function useStoryblok({
  fetchFunction,
  bridgeOptions = {},
  fetchFunctionProps = {},
}) {
  let [story, setStory] = useState({});

  if (typeof window !== "undefined") {
    // Check if we're running in the browser.
    let { StoryblokBridge } = window;
    if (StoryblokBridge) {
      // Check if js-bridge is running in the browser.
      registerStoryblokBridge(
        story?.id,
        (story) => setStory(story),
        bridgeOptions
      );
    }
  }

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      let data = (await fetchFunction(fetchFunctionProps)) ?? null;
      setStory(data ? data : null);
    }
    if (!ignore) {
      fetchData();
    }
    return () => {
      ignore = true;
    };
  }, []);

  return story;
}
