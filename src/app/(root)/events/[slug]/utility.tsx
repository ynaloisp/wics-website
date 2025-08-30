import { blogPosts } from './test'; // Adjust the path to where blogPosts is defined

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
