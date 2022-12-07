import { components } from "./initStoryblok";

export default function StoryblokComponent({ blok, ...restProps }) {
  if (!blok) {
    return <p>Please provide a blok</p>;
  }
  let ReactComp = components[blok["component"]];

  if (!ReactComp) {
    return <p>No component name {blok["component"]} found</p>;
  }

  return (
    <div>
      <ReactComp blok={blok} {...restProps} />
    </div>
  );
}
