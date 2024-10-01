import { CV_URL } from "~/utils/constant";
import Icon from "./common/Icon";

const Wrapper = ({ years, company, logo, children, technologies = [] }) => {
  return (
    <div className="flex gap-6">
      <header
        className="whitespace-nowrap min-w-28 text-sm opacity-50 mt-1 hidden md:block"
        aria-label={years}
      >
        {years}
      </header>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center md:mb-1">
          <img src={logo} alt="softserve logo" className="h-6 w-6 rounded-md" />
          <h3 className="text-lg font-body">{company}</h3>
        </div>
        <header
          className="whitespace-nowrap min-w-28 text-sm opacity-50 md:hidden"
          aria-label={years}
        >
          {years}
        </header>
        {children}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <div className="inline-block relative px-3 py-1 rounded-lg group text-sm font-light cursor-default">
              <div
                className="absolute top-0 left-0 w-full h-full rounded-lg bg-lightBlue opacity-80 scale-[0.95]
                  group-hover:scale-100 transition-transform duration-300 ease-in-out group-hover:opacity-100 z-[-1]
                "
              />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="flex flex-col gap-10">
      <Wrapper
        years="2024 - present"
        company="Awesomic"
        logo="/images/awesomic.jpeg"
        technologies={[
          "React",
          "Three.js",
          "Node.js",
          "Next.js",
          "TailwindCSS",
        ]}
      >
        <div className="flex flex-col gap-2">
          <p className="text-md font-medium">AI-powered 3d models creation</p>
          <p className="font-light">
            Contributed to app redesign and core business logic iterations.
            Worked on 3D model viewer features and performance optimization.
            Delivered ton of key features and improved the user experience
            across all parts of the app
          </p>
        </div>
      </Wrapper>
      <Wrapper
        years="2021 - 2024"
        company="SoftServe"
        logo="/images/softserve.png"
        technologies={[
          "React",
          "TypeScript",
          "Storybook",
          "StyledComponents",
          "Jest",
        ]}
      >
        <div className="flex flex-col gap-2">
          <p className="text-md font-medium">Component library</p>
          <p className="font-light">
            Integrated multiple component libraries into a monorepo. Led the
            migration of the project to TypeScript and focused on improving
            component accessibility. Provided technical support to other
            development teams.
          </p>
        </div>
      </Wrapper>
      <Wrapper
        years="2018 - 2021"
        company="Wise Engineering"
        logo="/images/wise-engineering.jpeg"
        technologies={["Svelte", "Node.js", "SCSS"]}
      >
        <div className="flex flex-col gap-2">
          <p className="text-md font-medium">Digital fitness platform</p>
          <p className="font-light">
            Initiated and maintained the frontend part of the project,
            collaborating closely with designers and the backend team to develop
            key features. Contributed to building the landing page,
            authorization, and a dashboard. Also worked on developing the
            interactive video player.
          </p>
        </div>
      </Wrapper>
      <a
        className="flex gap-2 font-semibold items-start text-md hover:underline underline-offset-2 decoration-skyBlue"
        href={CV_URL}
        target="blank"
      >
        View Full Resume
        <Icon name="FileSymlink" size={20} />
      </a>
    </section>
  );
};
