import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./[slug]/test";

export default function PastEventHighlights() {
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-2xl">Past Event Highlights</h1>
      <div className="grid grid-cols-3 gap-10">
        {blogPosts.slice(0, 3).map((post) => (
          <Card
            key={post.id}
            className="bg-white/50 drop-shadow-[0px_0px_10.4px_#db277780] border-none p-0 rounded-xl"
          >
            <CardHeader className="p-4">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-[0px_0px_10px_#db277760]">
                <Image
                  src={post.coverImage}
                  alt="External Image"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-bold">{post.title}</p>
              <p className="text-sm text-500 text-lightg">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/events/${post.slug}`}
                className="bg-white font-semibold rounded-lg w-full border border-1 p-2 text-center"
              >
                <button>View Recap</button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-buttonGradient font-semibold rounded-lg p-2 pl-5 pr-5 text-grey mt-[2%]">
          See More
        </button>
      </div>
    </div>
  );
}
