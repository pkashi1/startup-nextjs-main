// app/blog/[slug]/page.tsx
import blogData from '@/components/Blog/blogData';

export async function generateStaticParams() {
  return blogData.map(post => ({ slug: post.slug }));
}

export default function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const post = blogData.find(p => p.slug === params.slug);
  if (!post) return <div>Not found</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
