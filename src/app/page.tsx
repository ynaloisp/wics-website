"use client";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fdf2f8] via-white to-[#fdf2f8]">
      <div className="pt-16 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-cols-1 lg:flex-cols-2 gap-40 items-center justify-center">
            <div className="space-y-6">
              <div className="inline-block">
                <div className="flex items-center space-x-2 bg-[#fce7f3] rounded-full px-4 py-1">
                  <Sparkles className="w-4 h-4 text-hotpink" />
                  <span className="text-sm text-hotpink font-semibold">
                    Hunter College WiCS
                  </span>
                </div>
              </div>
              <h1 className="text-5xl font-bold leading-tight">
                Where Women in Tech
                <span className="block text-hotpink">Shape the Future</span>
              </h1>
              <p className="text-lg text-grey max-w-2xl">
                Join a vibrant community of tech enthusiasts, innovators, and
                future leaders at Hunter College.
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://forms.gle/KuWM3UqUjjrPANCr7" target="_blank">
                  <Button className="bg-hotpink hover:bg-[#be185d] px-6">
                    Join WiCS
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FBCEEC] to-[#fdf2f8] rounded-2xl transform rotate-3 " />
              <Image
                src="/images/event/cookie-decorating-team.jpg"
                alt="team"
                width={700}
                height={500}
                className="relative rounded-2xl transform -rotate-3 transition-transform hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-4/5 pb-20 flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <Image
            src="/images/photo/IMG_2282.png"
            alt="group pic"
            width={500}
            height={500}
            className="rounded-3xl "
          />
          <div className="w-auto flex flex-col justify-center">
            <h1 className="w-full text-center pb-4">
              All are welcome to join our club, come to events, and participate
              on our board regardless of your major, gender, or declared major.
            </h1>
            <h1 className="w-full text-center pb-4">
              You must be an ally and supporter of womxn in tech!
            </h1>
            <h1 className="w-full text-center pb-4">
              We are so excited for you to join us in empowering and promoting
              women in tech :)
            </h1>
          </div>
        </div>
      </div>

      <div className="pb-16">
        <h1 className="sm:text-2xl md:text-4xl text-xl font-bold text-center pb-4">
          Want to be a Member?
        </h1>
        <h1 className="w-full text-center pb-4">
          Join our club by filling out{" "}
          <a href="https://forms.gle/KuWM3UqUjjrPANCr7" target="_blank">
            this form!
          </a>{" "}
          This form will also put you on our mailing list so you can stay up to
          date with our events and opportunities.
        </h1>
        <div className="flex justify-center">
          <button className="p-2 bg-pink rounded-sm text-white flex items-center">
            <a href="https://forms.gle/KuWM3UqUjjrPANCr7" target="_blank">
              Join Now!
            </a>
            <MoveUpRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
