import Image from "next/image";

function About() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-banner bg-cover bg-center h-96 flex items-center justify-center">
        <div className="bg-white bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-black text-4xl font-bold">
            &lt; / WOMXN IN COMPUTER SCIENCE &gt;
          </h1>
          <h4 className="text-black mt-4">
            the pre-professional organization for female and non-binary computer
            science students at CUNY Hunter College
          </h4>
        </div>
      </div>

      <div className="w-full my-20">
        <div className="flex justify-center items-center gap-8">
          <Image
            src="/images/photo/IMG_3152.png"
            alt="group pic"
            width={600}
            height={300}
            className="max-w-1/2"
          />
          <div className="w-1/2 text-center">
            <h1 className="text-4xl font-semibold mt-8">Mission</h1>

            <h1 className="p-4">
              Historically, Technology and Computer Science have been
              male-dominated fields. Our goal is to close the gap between men
              and women in the technology and computer science industry. We
              genuinely care for and want to help our members excel in, or learn
              more about, the tech field.
            </h1>
            <h1 className="p-4">
              We recognize that an increase in diversity will inspire creativity
              and innovation. Therefore, our organization drives to create a
              diverse community that supports the advancement of womxn and
              underrepresented minorities.
            </h1>
            <h1 className="p-4">
              Women, Men, and Non-Binary can join. All allies of womxn in tech
              are welcome to our events and to serve as board members.
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-center mt-8">Purpose</h1>
          <h1 className="text-center p-4">
            We aim to make a positive impact in the Computer Science community
            at Hunter and serve as a support group for students. We create
            events and opporunities to help our members develop their technical
            skills, secure opportunities, and fortify the confidence in their
            chosen careers. Developing the technical and interpersonal skills
            required for transiting into the tech industry after graduation is
            difficult but, we, at WiCS are here to support your journey.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
