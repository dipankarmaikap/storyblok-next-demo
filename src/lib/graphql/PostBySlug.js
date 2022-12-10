const PostBySlug = `
query PostBySlug($slug: ID!) {
    PostItem(id: $slug) {
      id
      published_at
      created_at
      full_slug
      name
      content {
        _editable
        _uid
        component
        title
        content
        Tags {
          fullSlug
          name
          id
        }
        Categories {
          name
          fullSlug
          id
        }
      }
    }
  }  
`;
export { PostBySlug };
