import Image from "next/image";

export default function Officers() {
  return (
    <div className="bg-[#fef8f8] min-h-screen">
      <div className="p-10 pt-20 rounded-lg text-center">
        <h1 className="text-black text-5xl font-medium">
          Meet our Current Officers
        </h1>
        <h1 className="text-3xl font-normal p-4">
          Want to get more involved? Contact us at hunterwics@gmail.com
        </h1>
      </div>
      <div className="container mx-auto w-4/5 p-12 pb-20 flex justify-around">
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
          <Image
            src="/images/officers/sarah-levitan.jpg"
            alt="Sarah Levitan"
            width={300}
            height={300}
            className="rounded-3xl w-3/5 shadow-card object-cover"
          />
          <div className="p-4">
            <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
              Sarah Ita Levitan
            </h1>
            <h1 className="text-2xl font-normal mb-2">Faculty Advisor</h1>
            <p className="mb-1.5">Assistant Professor of Computer Science</p>
          </div>
        </div>
      </div>

      {/* board members begin */}
      <div className="container mx-auto w-4/5 p-12 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Emily-Ann Willix */}
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
          <Image
            src="/images/officers/emily-ann-willix.jpeg"
            alt="Emily-Ann Willix"
            width={300}
            height={300}
            className="rounded-3xl w-3/5 shadow-card "
          />
          <div className="p-4">
            <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
              Emily-Ann Willix
            </h1>
            <h1 className="text-xl text-[#f9679d]">Executive Board Member</h1>
            <h1 className="text-2xl font-normal mb-2">President</h1>
            <p className="mb-1.5">Computer Science Major</p>
          </div>
        </div>
        {/* Ynalois Pangilinan */}
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
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
            <h1 className="text-xl text-[#f9679d]">Executive Board Member</h1>
            <h1 className="text-2xl font-normal mb-2">Vice President</h1>
            <p className="mb-1.5">Computer Science Major</p>
          </div>
        </div>
        {/* Ella Song */}
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
          <Image
            src="/images/officers/ella-song.jpeg"
            alt="Ella Song"
            width={300}
            height={300}
            className="rounded-3xl w-3/5 shadow-card"
          />
          <div className="p-4">
            <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
              Ella Song
            </h1>
            <h1 className="text-xl text-[#f9679d]">Executive Board Member</h1>
            <h1 className="text-2xl font-normal mb-2">Secretary</h1>
            <p className="mb-1.5">Computer Science Major</p>
          </div>
        </div>
        {/* Madina Monowara */}
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
          <Image
            src="/images/officers/madina-monowara.jpg"
            alt="Madina Monowara"
            width={300}
            height={300}
            className="rounded-3xl w-3/5 shadow-card"
          />
          <div className="p-4">
            <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
              Madina Monowara
            </h1>
            <h1 className="text-2xl font-normal mb-2">Co-Secretary</h1>
            <p className="mb-1.5">Computer Science Major</p>
          </div>
        </div>
        {/* Monae White */}
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
          <Image
            src="/images/officers/monae-white.jpeg"
            alt="Monae White"
            width={300}
            height={300}
            className="rounded-3xl w-3/5 h-auto max-w-full shadow-card object-cover"
          />
          <div className="p-4">
            <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
              Monae White
            </h1>
            <h1 className="text-xl text-[#f9679d]">Executive Board Member</h1>
            <h1 className="text-2xl font-normal mb-2">Treasurer</h1>
            <p className="mb-1.5">Computer Science Major</p>
          </div>
        </div>
        {/* Tarina Priti */}
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
          <Image
            src="/images/officers/tarina-priti.jpeg"
            alt="Tarina Priti"
            width={300}
            height={300}
            className="rounded-3xl w-3/5 shadow-card"
          />
          <div className="p-4">
            <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
              Tarina Priti
            </h1>
            <h1 className="text-2xl font-normal mb-2">Community Officer</h1>
            <p className="mb-1.5">Computer Science Major</p>
          </div>
        </div>
        {/* Kripamoye Biswas */}
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
          {/* <Image
            src="/images/officers/tarina-priti.jpeg"
            alt="Kripamoye Biswas"
            width={300}
            height={300}
            className="rounded-3xl w-3/5 shadow-card"
          /> */}
          <div className="p-4">
            <h1 className="text-4xl font-medium text-[#fceee9] text-shadow-officer-name mb-2">
              Kripamoye Biswas
            </h1>
            <h1 className="text-2xl font-normal mb-2">Social Media Manager</h1>
            <p className="mb-1.5">Computer Science Major</p>
          </div>
        </div>
        <div className="bg-[#cee1b9] h-auto w-96 py-4 m-16 text-center rounded-xl shadow-officer-card flex flex-col items-center">
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
            <p className="mb-1.5">Computer Science Major</p>
          </div>
        </div>
      </div>
    </div>
  );
}
