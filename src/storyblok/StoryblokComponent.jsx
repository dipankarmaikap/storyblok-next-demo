import { components } from "./initStoryblok";

export default function StoryblokComponent({ blok, ...restProps }) {
  if (!blok) {
    return (
      <p className="bg-red-500 text-white m-4 p-4 text-xl">
        Please provide a blok
      </p>
    );
  }
  let ReactComp = components[blok["component"]];

  if (!ReactComp) {
    return (
      <p className="bg-gray-200 m-4 p-4 text-xl">
        No component name{" "}
        <span className="text-xl font-bold text-red-600">{`{${blok["component"]}}`}</span>{" "}
        found. Please contact your developer to define this component in your
        project codebase.
      </p>
    );
  }

  return (
    <div>
      <ReactComp blok={blok} {...restProps} />
    </div>
  );
}
