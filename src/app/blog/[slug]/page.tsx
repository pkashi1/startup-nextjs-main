// app/blog/[slug]/page.tsx
import blogData from '@/components/Blog/blogData';

export async function generateStaticParams() {
  return blogData.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData.find(p => p.slug === slug);
  if (!post) return <div>Not found</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
