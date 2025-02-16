import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Resources() {
  return (
    <div className="font-inter min-h-screen space-y-16">
      <div className="flex flex-col gap-4 items-center justify-center pt-10">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="text-grey text-lg">
          Explore our curated collection of resources to support your journey in
          computer science and technology.
        </p>
      </div>

      <div className="">
        <Tabs defaultValue="career" className="">
          <TabsList className="w-full">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>
          <TabsContent value="career"></TabsContent>
          <TabsContent value="learning"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
