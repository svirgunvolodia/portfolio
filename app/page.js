import { ExperienceSection } from "~/components/ExperienceSection";
import { Header } from "~/components/Header";

const AboutSectoin = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-4 mb-16 md:mb-24 lg:mb-36 cursor-[url('/images/cat-head.cur'), auto]"
    >
      <p className="font-light">
        Another Frontend Engineer obsessed with attention to detail, correct
        code, and proper architecture. Proficient in React, TypeScript, Node.js,
        Next.js, Svelte and Three.js.
      </p>
      <p className="font-light">
        I have experience working in a variety of environments, from
        collaborating with{" "}
        <strong className="font-semibold">large engineering teams</strong> (25+
        engineers) at{" "}
        <a
          className="font-semibold hover:text-skyBlue"
          href="https://www.softserveinc.com/"
          target="blank"
        >
          huge corporation
        </a>{" "}
        to being the sole front-end developer on ambitious{" "}
        <a
          className="font-semibold hover:text-skyBlue"
          href="https://www.awesomic.com/"
          target="blank"
        >
          YC-backed startup
        </a>{" "}
        projects, building them{" "}
        <strong className="font-semibold">from the ground up.</strong>
      </p>
      <p className="font-light">
        When I&apos;m not at the computer, I&apos;m usually playing squash or
        board games with friends, hanging out with my{" "}
        <span
          className="font-semibold hover:text-orange-600 
          cursor-[url('/images/cat-cursor.png'),_pointer]
        "
        >
          orange cat
        </span>
        , or getting lost in a good series. I&apos;m also really into cars and
        snowboarding
      </p>
    </section>
  );
};

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 min-h-screen md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSectoin />
          <ExperienceSection />
          <section id="articles" className="h-96"></section>
        </main>
      </div>
    </div>
  );
}
