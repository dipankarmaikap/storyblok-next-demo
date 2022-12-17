import React from "react";

export default function PostArchive() {
  return <div>Post Archive</div>;
}

export async function getStaticProps() {
  return {
    props: {
      url: null,
      key: "posts-page",
    },
  };
}
