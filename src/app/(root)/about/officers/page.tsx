import Image from "next/image";
import { Mail, Linkedin, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignedOut } from "@clerk/nextjs";
import OfficerCard from "./card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//test
const faculty = [
    {
        title: "Sarah Ita Levitan",
        description: "Faculty Advisor",
        major: "Assistant Professor of Computer Science",
        imageUrl: "/images/officers/Sarah-Levitan.jpg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
];
const eboard = [
    {
        title: "Emily-Ann Willix",
        description: "President",
        major: "Computer Science",
        imageUrl: "/images/officers/Emily-Ann-Willix.jpeg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Ynalois Pangilinan",
        description: "Vice President",
        major: "Computer Science",
        imageUrl: "/images/officers/ynalois-pangilinan2.jpg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Michelle Rivera Perez",
        description: "Co-Secretary",
        major: "Computer Science",
        imageUrl: "/images/officers/Sarah-Levitan.jpg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Madina Monowara",
        description: "Co-Secretary",
        major: "Computer Science",
        imageUrl: "/images/officers/Madina-Monowara.jpg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Monae White",
        description: "Treasurer",
        major: "Computer Science",
        imageUrl: "/images/officers/Monae-White.jpg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
];
const team = [
    {
        title: "Tarina Priti",
        description: "Community Officer",
        major: "Computer Science",
        imageUrl: "/images/officers/Tarina-Priti.jpeg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Sanjida Fairuse",
        description: "Community Officer",
        major: "Computer Science",
        imageUrl: "/images/officers/sanjida-f.jpeg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Kripamoye Biswas",
        description: "Social Media Manager",
        major: "Computer Science & Math Major",
        imageUrl: "/images/officers/Kripamoye-Biswas.png",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Angela Zhang",
        description: "Social Media Manager",
        major: "Computer Science",
        imageUrl: "/images/officers/angela-z.jpeg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Valentina Quiroga",
        description: "Graphic Designer",
        major: "Computer Science",
        imageUrl: "/images/officers/valentina-q.jpeg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
];
const web = [
    {
        title: "Selina Zheng",
        description: "Web Master",
        major: "Computer Science and Chinese",
        imageUrl: "/images/officers/selina-z.jpeg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Anita Prova",
        description: "Web Master",
        major: "Computer Science",
        imageUrl: "/images/officers/anita-p.jpg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
];
const workshop = [
    {
        title: "Ashleigh Wong",
        description: "Tech Workshop Coordinator",
        major: "Computer Science",
        imageUrl: "/images/officers/ashleigh-w.jpg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Makiya Laurenza",
        description: "Tech Workshop Coordinator",
        major: "Computer Science",
        imageUrl: "/images/officers/makiya-l.heic",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Marie Cari",
        description: "Tech Workshop Coordinator",
        major: "Computer Science & Math Major",
        imageUrl: "/images/officers/marie-c.jpg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Bode Chiu",
        description: "Tech Workshop Coordinator",
        major: "Computer Science",
        imageUrl: "/images/officers/bode-c.jpeg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
    {
        title: "Sy’rai Pierre",
        description: "Tech Workshop Coordinator",
        major: "Computer Science",
        imageUrl: "/images/officers/syrai-pierre.jpeg",
        linkedin: "https://www.linkedin.com/in/sarah-ita-levitan-7b1b3b1b/",
        github: "",
        email: "mailto:hunterwics@gmail.com",
    },
];
export default function Officers() {
    return (
        <div className="min-h-screen from-[#fdf2f8] via-white to-[#fdf2f8]">
            <div className="container mx-auto w-4/5 h-[40%] p-7 pt-20 sm:p-10 rounded-lg text-left flex flex-row items-center justify-between">
                <div className="w-[50%] h-40 flex flex-col justify-around">
                    <h1 className="text-black text-5xl font-bold">
                        Meet Our Team
                    </h1>
                    <p className="text-[#4B5563] text-l font-light">
                        The dedicated individuals working to empower and promote
                        women in technology at Hunter College.
                    </p>
                </div>
                <div className="flex flex-col w-[40%] h-48 text-left items-left justify-center rounded-lg shadow-card padding-10 relative bg-white">
                    <div className="z-10 opacity-100 absolute left-[10%]">
                        <h3 className="text-black text-l font-bold opacity-100 z-2">
                            Contact us:
                        </h3>
                        <p className="text-l font-normal pt-4 text-[#4B5563]">
                            Reach the team:
                        </p>
                        <a
                            href="mailto:hunterwics@gmail.com"
                            className="text-[#f9679d] text-l font-normal underline hover:text-[#f9679d]"
                        >
                            hunterwics@gmail.com
                        </a>
                    </div>
                    {/* bg-[#f9679d] blur-xl w-[100%] min-h-48 absolute top-0 left-0 z-0 opacity-50 */}
                    <span className="bg-[#f9679d] blur-xl w-[100%] h-48 absolute top-0 left-0 z-0 opacity-25"></span>
                    <span className="bg-white w-[95%] h-auto absolute top-0 left-0 opacity-80 justify-center rounded-lg z-2"></span>
                </div>
            </div>
            <Tabs defaultValue="faculty" className="w-[400px]">
                <TabsList className="ml-[10%]">
                    <TabsTrigger value="faculty">Faculty Advisor</TabsTrigger>
                    <TabsTrigger value="eboard">Executive Board</TabsTrigger>
                    <TabsTrigger value="team">Team</TabsTrigger>
                    <TabsTrigger value="web">Web Masters</TabsTrigger>
                    <TabsTrigger value="workshop">
                        Workshop Coordinator
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="faculty" className="w-screen">
                    <div className="container mx-auto w-4/5 h-auto p-7 pt-20 sm:p-10 rounded-lg text-left flex flex-wrap items-center justify-around">
                        {faculty.map((item, index) => (
                            <OfficerCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                major={item.major}
                            />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="eboard" className="w-screen">
                    <div className="container mx-auto w-4/5 h-auto p-7 pt-20 sm:p-10 rounded-lg text-left flex flex-wrap items-center justify-around">
                        {eboard.map((item, index) => (
                            <OfficerCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                major={item.major}
                            />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="team" className="w-screen">
                    <div className="container mx-auto w-4/5 h-auto p-7 pt-20 sm:p-10 rounded-lg text-left flex flex-wrap items-center justify-around">
                        {team.map((item, index) => (
                            <OfficerCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                major={item.major}
                            />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="web" className="w-screen">
                    <div className="container mx-auto w-4/5 h-auto p-7 pt-20 sm:p-10 rounded-lg text-left flex flex-wrap items-center justify-around">
                        {web.map((item, index) => (
                            <OfficerCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                major={item.major}
                            />
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="workshop" className="w-screen">
                    <div className="container mx-auto w-4/5 h-auto p-7 pt-20 sm:p-10 rounded-lg text-left flex flex-wrap items-center justify-around">
                        {workshop.map((item, index) => (
                            <OfficerCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                imageUrl={item.imageUrl}
                                major={item.major}
                            />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
            <div className="pb-20 px-4">
                <div className="container mx-auto">
                    <Card className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fce7f3] to-[#fdf2f8]"></div>
                        <CardContent className="relative p-8 md:p-12">
                            <div className="max-w-2xl mx-auto text-center">
                                <h2 className="text-3xl font-bold mb-4">
                                    Want to Get Involved?
                                </h2>
                                <p className="text-black mb-8">
                                    We’re always looking for passionate
                                    individuals to join our team. Reach out to
                                    learn more about leadership opportunities!
                                </p>

                                <Button className="bg-hotpink hover:bg-[#be185d]">
                                    Contact Us
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
