import { notFound } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import Image from "next/image";

interface PageProps {
  params: { slug: string };
}

// Helper to get post
function getPostBySlug(slug: string) {
  return blogData.find((post) => post.slug === slug);
}

// ✅ MUST be async function when using dynamic params
export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await Promise.resolve(params); // Await ensures correct type handling

  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        Published on {post.publishDate} by {post.author.name}
      </div>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-md mb-6"
      />
      <div className="prose dark:prose-invert max-w-none">
        {post.content.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

// Required for static export
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}
