import blogData from "@/components/Blog/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";

// Explicit return type to avoid TypeScript confusion in Next.js 15
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const post = blogData.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

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
