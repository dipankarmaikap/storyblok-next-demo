export default function Home({ story }) {
  return (
    <div className="posts-page">
      <h1>Post Overview Page</h1>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      story: null,
      key: "post-overview-page",
    },
  };
}
