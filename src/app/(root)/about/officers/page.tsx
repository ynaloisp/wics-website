import Image from "next/image";
import { Mail, Linkedin, Github } from "lucide-react";
import {
    Toast,
    ToastDescription,
    ToastTitle,
    ToastProvider,
} from "@/components/ui/toast";
import { SignedOut } from "@clerk/nextjs";

//test

export default function Officers() {
    return (
        <div className="bg-[#fef8f8] min-h-screen">
            <div className="container mx-auto w-4/5 h-[40%] p-7 pt-20 sm:p-10 rounded-lg text-left flex flex-row items-center justify-between">
                <div className="w-[50%] flex flex-col justify-center">
                    <h1 className="text-black text-5xl font-bold">
                        Meet Our Team
                    </h1>
                    <p className="text-[#4B5563] text-l font-light">
                        The dedicated individuals working to empower and promote
                        women in technology at Hunter College.
                    </p>
                </div>
                <div className="flex flex-col w-[45%] h-64 text-left items-left justify-center rounded-lg shadow-card padding-10 relative bg-white">
                    <span className="bg-[#f9679d] blur-xl w-[100%] h-64 absolute top-0 left-0 z-0 opacity-50"></span>
                    <span className="bg-white w-[100%] h-64 absolute top-0 left-0 opacity-50 justify-center rounded-lg"></span>
                    <div className="z-3 opacity-100">
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
                </div>
            </div>
            <div className="container mx-auto w-4/5 p-8 flex justify-around">
                <div className="bg-[#cee1b9] h-auto w-72 py-4 m-8 text-center rounded-xl shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/Sarah-Levitan.jpg"
                        alt="Sarah Levitan"
                        width={300}
                        height={300}
                        className="rounded-3xl w-3/5 shadow-card object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Sarah Ita Levitan
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">
                            Faculty Advisor
                        </h1>
                        <p className="mb-4">
                            Assistant Professor of Computer Science
                        </p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: sarah.levitan@hunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sarah-ita-levitan-026a33126/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* board members begin */}
            <div className="container mx-auto w-4/5 p-12 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-8 justify-items-center">
                {/* Emily-Ann Willix */}
                <div className="bg-[#cee1b9] h-auto sm:w-96 w-60 py-4 m-8 text-center rounded-xl md:max-w-56 lg:max-w-72 shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/Emily-Ann-Willix.jpeg"
                        alt="Emily-Ann Willix"
                        width={300}
                        height={300}
                        className="rounded-3xl w-3/5 shadow-card "
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Emily-Ann Willix
                        </h1>
                        <h1 className="text-xl text-[#f9679d]">
                            Executive Board Member
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">President</h1>
                        <p className="mb-4">Computer Science Major</p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: emilyann.willix77@myhunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/emily-ann-willix-878874260/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <Github className="hover:text-red-700 w-5 h-auto ml-2.5 mr-2.5" />
                        </div>
                    </div>
                </div>
                {/* Ynalois Pangilinan */}
                <div className="bg-[#cee1b9] h-auto sm:w-96 w-60 py-4 m-8 text-center rounded-xl md:max-w-56 lg:max-w-72 shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/ynalois-pangilinan2.jpg"
                        alt="Ynalois Pangilinan"
                        width={300}
                        height={300}
                        className="rounded-3xl w-3/5 shadow-card"
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Ynalois Pangilinan
                        </h1>
                        <h1 className="text-xl text-[#f9679d]">
                            Executive Board Member
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">
                            Vice President
                        </h1>
                        <p className="mb-4">Computer Science Major</p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: ynalois.pangilinan14@myhunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ynalois-pangilinan/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://github.com/ynaloisp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Ella Song */}
                <div className="bg-[#cee1b9] h-auto sm:w-96 w-60 py-4 m-8 text-center rounded-xl md:max-w-56 lg:max-w-72 shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/Ella-Song.jpeg"
                        alt="Ella Song"
                        width={300}
                        height={300}
                        className="rounded-3xl w-3/5 shadow-card"
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Ella Song
                        </h1>
                        <h1 className="text-xl text-[#f9679d]">
                            Executive Board Member
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">Secretary</h1>
                        <p className="mb-4">
                            Computer Science & Psychology Major
                        </p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: ella.song17@myhunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ella-song/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <Github className="hover:text-red-700 w-5 h-auto ml-2.5 mr-2.5" />
                        </div>
                    </div>
                </div>
                {/* Madina Monowara */}
                <div className="bg-[#cee1b9] h-auto sm:w-96 w-60 py-4 m-8 text-center rounded-xl md:max-w-56 lg:max-w-72 shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/Madina-Monowara.jpg"
                        alt="Madina Monowara"
                        width={300}
                        height={300}
                        className="rounded-3xl w-3/5 shadow-card"
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Madina Monowara
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">
                            Co-Secretary
                        </h1>
                        <p className="mb-4">Computer Science Major</p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: madina.monowara04@myhunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/madinamonowara/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <Github className="hover:text-red-700 w-5 h-auto ml-2.5 mr-2.5" />
                        </div>
                    </div>
                </div>
                {/* Monae White */}
                <div className="bg-[#cee1b9] h-auto sm:w-96 w-60 py-4 m-8 text-center rounded-xl md:max-w-56 lg:max-w-72 shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/Monae-White.jpg"
                        alt="Monae White"
                        width={300}
                        height={300}
                        className="rounded-3xl w-3/5 h-auto max-w-full shadow-card object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Monae White
                        </h1>
                        <h1 className="text-xl text-[#f9679d]">
                            Executive Board Member
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">Treasurer</h1>
                        <p className="mb-4">Computer Science Major</p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: monae.white17@myhunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/monae-white/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <Github className="hover:text-red-700 w-5 h-auto ml-2.5 mr-2.5" />
                        </div>
                    </div>
                </div>
                {/* Tarina Priti */}
                <div className="bg-[#cee1b9] h-auto sm:w-96 w-60 py-4 m-8 text-center rounded-xl md:max-w-56 lg:max-w-72 shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/Tarina-Priti.jpeg"
                        alt="Tarina Priti"
                        width={300}
                        height={300}
                        className="rounded-3xl w-3/5 shadow-card"
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Tarina Priti
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">
                            Community Officer
                        </h1>
                        <p className="mb-4">Computer Science Major</p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: tarina.priti30@myhunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tarinapriti/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <Github className="hover:text-red-700 w-5 h-auto ml-2.5 mr-2.5" />
                        </div>
                    </div>
                </div>
                {/* Kripamoye Biswas */}
                <div className="bg-[#cee1b9] h-auto sm:w-96 w-60 py-4 m-8 text-center rounded-xl md:max-w-56 lg:max-w-72 shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/Kripamoye-Biswas.png"
                        alt="Kripamoye Biswas"
                        width={300}
                        height={300}
                        className="rounded-3xl w-4/5 shadow-card"
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Kripamoye Biswas
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">
                            Social Media Manager
                        </h1>
                        <p className="mb-4">Computer Science & Math Major</p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: kripamoye.biswas99@myhunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kripamoyebiswas/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <Github className="hover:text-red-700 w-5 h-auto ml-2.5 mr-2.5" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#cee1b9] h-auto sm:w-96 w-60 py-4 m-8 text-center rounded-xl md:max-w-56 lg:max-w-72 shadow-officer-card flex flex-col items-center">
                    <Image
                        src="/images/officers/angela-z.jpeg"
                        alt="Angela Zhang"
                        width={300}
                        height={300}
                        className="rounded-3xl w-3/5 shadow-card"
                    />
                    <div className="p-4">
                        <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
                            Angela Zhang
                        </h1>
                        <h1 className="text-2xl font-normal mb-2">
                            Co-Social Media Manager
                        </h1>
                        <p className="mb-4">Computer Science Major</p>
                        <div className="flex items-center justify-center">
                            <a href="mailto: angela.zhang99@myhunter.cuny.edu">
                                <Mail className="hover:scale-150 w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/apzhang7/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="hover:scale-150 hover:text-shadow-white w-5 h-auto ml-2.5 mr-2.5" />
                            </a>
                            <Github className="hover:text-red-700 w-5 h-auto ml-2.5 mr-2.5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
