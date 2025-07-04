import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { slug, title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
      <Link href={`/blog/${slug}`} className="relative block w-full h-48 sm:h-56">
        <Image src={image} alt={title} fill className="object-cover rounded-t-xs" />
        <span className="bg-primary absolute top-4 right-4 z-20 rounded-full px-3 py-1 text-xs font-semibold text-white capitalize">
          {tags[0]}
        </span>
      </Link>

      <div className="p-6">
        <h3>
          <Link href={`/blog/${slug}`} className="hover:text-primary dark:hover:text-primary mb-2 block text-lg font-bold text-black sm:text-xl dark:text-white">
            {title}
          </Link>
        </h3>
        <p className="text-body-color mb-4 text-sm font-medium">
          {paragraph}
        </p>

        <div className="flex items-center">
          <div className="flex items-center">
            <div className="relative mr-3 h-8 w-8 overflow-hidden rounded-full">
              <Image src={author.image} alt={author.name} fill />
            </div>
            <div>
              <p className="text-xs text-dark dark:text-white">By {author.name}</p>
              <p className="text-[10px] text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>

        <Link href={`/blog/${slug}`} className="text-primary mt-4 inline-block text-sm font-semibold">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
