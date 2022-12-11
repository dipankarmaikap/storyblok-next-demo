import fetchClient from "~/lib/fetchClient";
import { HomePageQuery } from "~/lib/graphql/HomePageQuery";

export default function useStoryblok() {
  let [story, setStory] = useState();
  registerSbBridge(story.id, (story) => setStory(story), bridgeOptions);

  useEffect(() => {
    async function fetchData() {
      let data =
        (await fetchClient({
          query: HomePageQuery,
        })) ?? null;
      setStory(data ? data?.PageItem : null);
    }

    fetchData();
  }, []);

  return story;
}
