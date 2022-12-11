import initStoryblok from "~/storyblok/initStoryblok";
export default function LoadStoryblok({ storyblokAcessKey }) {
  initStoryblok(storyblokAcessKey);
  return <div className="sr-only">storyblok client loaded</div>;
}
