const HomePageQuery = `{
    PageItem(id: "/home", resolve_relations: "FeaturedPostsSection.posts") {
      id
      uuid
      full_slug
      published_at
      created_at
      content {
        _editable
        _uid
        body
        component
      }
    }
  }`;
export { HomePageQuery };
