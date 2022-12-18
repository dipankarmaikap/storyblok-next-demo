import { storyblokEditable } from "@storyblok/js";

export default function Input({ blok }) {
  let editable = blok?._editable ? storyblokEditable(blok) : {};

  let { placeholder, type, _uid } = blok;
  // console.log(blok);
  return (
    <div {...editable} className="mb-6">
      {type === "textarea" ? (
        <div>
          <label className="block text-lg font-medium mb-1" htmlFor={_uid}>
            {placeholder}
          </label>
          <textarea
            className="border border-gray-400 w-full focus:outline-none p-2"
            id={_uid}
            placeholder={placeholder}
            cols="30"
            rows="10"
          />
        </div>
      ) : (
        <div>
          <label className="block text-lg font-medium mb-1" htmlFor={_uid}>
            {placeholder}
          </label>
          <input
            id={_uid}
            placeholder={placeholder}
            className="border border-gray-400 w-full focus:outline-none p-2"
            type={type ?? "text"}
          />
        </div>
      )}
    </div>
  );
}
