import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Laptop, Book, Users, Link } from "lucide-react";

export default function Resources() {
  return (
    <div className="font-inter min-h-screen space-y-16">
      <div className="flex flex-col gap-4 items-center justify-center pt-10 ml-[25%] mr-[25%] text-center">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="text-grey text-lg">
          Explore our curated collection of resources to support your journey in
          computer science and technology.
        </p>
      </div>

      <div className="ml-[10%] mr-[10%]">
        <Tabs defaultValue="career" className="">
          <TabsList className="w-full">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>
          <TabsContent value="learning">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 font-inter pt-8">
              <div className="bg-white font-semibold p-3 border border-[#E5E7EB] rounded-lg">
                <div className="flex items-center gap-2 p-2 justify-start pl-0">
                  <Code
                    strokeWidth={2}
                    className="bg-[#FCE7F3] text-[#DB2777] rounded-full p-1.5 h-8 w-8"
                  />
                  <span className="text-xl">Introduction to Programming</span>
                </div>
                <a className="text-[#EC4899] text-sm">Learn More</a>
              </div>

              <div className="bg-white font-semibold p-3 border border-[#E5E7EB] rounded-lg">
                <div className="flex items-center gap-2 p-2 justify-start pl-0">
                  <Laptop
                    strokeWidth={2}
                    className="bg-[#FCE7F3] text-[#DB2777] rounded-full p-1.5 h-8 w-8"
                  />
                  <span className="text-xl">Web Development Fundamentals</span>
                </div>
                <a className="text-[#EC4899] text-sm">Learn More</a>
              </div>

              <div className="bg-white font-semibold p-3 border border-[#E5E7EB] rounded-lg">
                <div className="flex items-center gap-2 p-2 justify-start pl-0">
                  <Book
                    strokeWidth={2}
                    className="bg-[#FCE7F3] text-[#DB2777] rounded-full p-1.5 h-8 w-8"
                  />
                  <span className="text-xl">
                    Data Structures and Algorithms
                  </span>
                </div>
                <a className="text-[#EC4899] text-sm">Learn More</a>
              </div>

              <div className="bg-white font-semibold p-3 border border-[#E5E7EB] rounded-lg">
                <div className="flex items-center gap-2 p-2 justify-start pl-0">
                  <Book
                    strokeWidth={2}
                    className="bg-[#FCE7F3] text-[#DB2777] rounded-full p-1.5 h-8 w-8"
                  />
                  <span className="text-xl">Machine Learning Basics</span>
                </div>
                <a className="text-[#EC4899] text-sm">Learn More</a>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="career">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 font-inter pt-8">
              <div className="bg-white font-semibold p-3 border border-[#E5E7EB] rounded-lg">
                <div className="flex items-center gap-2 p-2 justify-start pl-0">
                  <Book
                    strokeWidth={2}
                    className="bg-[#FCE7F3] text-[#DB2777] rounded-full p-1.5 h-8 w-8"
                  />
                  <span className="text-xl">Resume Writing Guide</span>
                </div>
                <a className="text-[#EC4899] text-sm">Learn More</a>
              </div>

              <div className="bg-white font-semibold p-3 border border-[#E5E7EB] rounded-lg">
                <div className="flex items-center gap-2 p-2 justify-start pl-0">
                  <Users
                    strokeWidth={2}
                    className="bg-[#FCE7F3] text-[#DB2777] rounded-full p-1.5 h-8 w-8"
                  />
                  <span className="text-xl">Interview Preparation</span>
                </div>
                <a className="text-[#EC4899] text-sm">Learn More</a>
              </div>

              <div className="bg-white font-semibold p-3 border border-[#E5E7EB] rounded-lg">
                <div className="flex items-center gap-2 p-2 justify-start pl-0">
                  <Laptop
                    strokeWidth={2}
                    className="bg-[#FCE7F3] text-[#DB2777] rounded-full p-1.5 h-8 w-8"
                  />
                  <span className="text-xl">Internship Opportunities</span>
                </div>
                <a className="text-[#EC4899] text-sm">Learn More</a>
              </div>

              <div className="bg-white font-semibold p-3 border border-[#E5E7EB] rounded-lg">
                <div className="flex items-center gap-2 p-2 justify-start pl-0">
                  <Link
                    strokeWidth={2}
                    className="bg-[#FCE7F3] text-[#DB2777] rounded-full p-1.5 h-8 w-8"
                  />
                  <span className="text-xl">Tech Industry Insights</span>
                </div>
                <a className="text-[#EC4899] text-sm">Learn More</a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
