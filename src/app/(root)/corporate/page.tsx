import Image from "next/image";

export default function Corporate() {
  return (
    <div className="bg-[#fef8f8] min-h-screen">
      <div className="bg-banner bg-cover bg-center h-96 flex items-center justify-center">
        <div className="bg-white bg-opacity-60 p-4 py-8 md:p-12 mx-7 md:mx-7 rounded-lg text-center">
          <h1 className="text-black text-3xl sm:text-5xl font-semibold">
            Corporate Sponsorship
          </h1>
        </div>
      </div>

      <div className="w-full my-20">
        <div className="">
          <h1 className="text-4xl font-medium mt-8 text-center">
            Our Sponsors
          </h1>
          <div className="flex justify-center gap-8 mt-8">
            <Image
              src="/images/sponsors/google.png"
              alt="Google"
              width={300}
              height={160}
              className="w-4/5 sm:w-1/5"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-5/6 text-xl font-medium text-center pb-20">
        <h1 className="p-4">
          WiCS are able to do what we do with the help of our generous sponsors!
        </h1>
        <h1 className="p-4">
          We hosts a number of academic and social events throughout the school
          year, including technical workshops, hackathons, and panels. To review
          more of our mission and initiatives, visit our about us.
        </h1>
        <h1 className="p-4">
          As a corporate sponsor of WiCS, you can help us achieve our goals by
          directly providing support and mentorship to our community, hosting
          virtual events for students, and more!
        </h1>
      </div>
      <div className="w-5/6 text-center text-2xl font-semibold container mx-auto">
        <h1 className="text-center">Perks</h1>
        <h1 className="text-xl font-medium p-4">
          Sponsorship helps our club hold a number of events that will help our
          members in development their careers. For our sponsors, we conduct
          events dedicated to them. This includes office visits, panels, and
          workshops.
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center place-items-center pb-20">
        <Image
          src="/images/photo/IMG_2345.png"
          alt="google group pic"
          width={600}
          height={500}
          className="p-4"
        />
        <Image
          src="/images/photo/IMG_2317.png"
          alt="google event"
          width={500}
          height={500}
          className="p-4"
        />
      </div>
      <div className="w-5/6 text-center text-2xl font-semibold container mx-auto mb-20">
        <h1 className="text-center">Become a Sponsor!</h1>
        <h1 className="text-xl font-medium p-4">
          If you would like to partner with us, contact us at
          hunterwics@gmail.com to learn more.
        </h1>
      </div>
    </div>
  );
}
