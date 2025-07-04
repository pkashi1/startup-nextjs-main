import blogData from "@/components/Blog/blogData";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { notFound } from "next/navigation";

export default function BlogDetailsPage({ params }: { params: { slug: string } }) {
  const blog = blogData.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl">{blog.title}</h1>
        <div className="flex items-center mb-6">
          <Image src={blog.author.image} alt={blog.author.name} width={40} height={40} className="rounded-full mr-3" />
          <div>
            <p className="text-sm text-body-color">By {blog.author.name}</p>
            <p className="text-xs text-body-color">{blog.publishDate}</p>
          </div>
        </div>
        <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-md">
          <Image src={blog.image} alt={blog.title} fill className="object-cover" />
        </div>
        <div className="prose dark:prose-invert max-w-none">
          {blog.content.split('\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {blog.tags.map((tag) => (
            <TagButton key={tag} text={tag} />
          ))}
        </div>
        <div className="mt-6">
          <SharePost />
        </div>
      </div>
    </section>
  );
}
