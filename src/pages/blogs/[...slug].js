import React from "react";

export default function BlogsPage({ story }) {
  console.log(story);
  return <div>[...slug]</div>;
}
export async function getStaticProps({ params: { slug } }) {
  return {
    props: {
      story: slug,
      key: JSON.stringify(slug),
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
