"use client";
import { useState, useEffect } from "react";
import Icon from "~/components/common/Icon";

const HeaderButton = ({ text, iconName, isActive, onClick }) => {
  const width = text.length * 10 + 70;

  return (
    <button
      className={`
        group justify-center items-center gap-2 flex h-10 py-2 px-5 bg-background text-black rounded-[4px] relative outline-[(2px, auto)] 
        hover:bg-skyBlue hover:text-white
        ${isActive ? "bg-skyBlue text-white" : ""}
      `}
      style={{
        width: width,
      }}
      onClick={onClick}
    >
      <span
        className={`
          absolute w-full h-full top-0 left-0 border border-gray-400 group-hover:border-skyBlue  rounded-md 
          transform group-hover:animate-bounceOutside animate-bounceInside
          ${isActive ? "border-skyBlue animate-bounceOutside" : ""}
        `}
      />
      <span className="pl-2">{text}</span>
      <div
        className={`
          w-0 opacity-0 group-hover:opacity-100 overflow-visible transition-all transition-slowest ease duration-200 group-hover:w-5
          ${isActive ? "opacity-100 !w-5" : ""}
        `}
      >
        <Icon name={iconName} size="18" />
      </div>
    </button>
  );
};

export const Header = () => {
  const SECTIONS = {
    ABOUT: "about",
    EXPERIENCE: "experience",
    ARTICLES: "articles",
  };

  const [selectedSection, setSelectedSection] = useState(SECTIONS.ABOUT);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = Object.values(SECTIONS).map((sectionId) =>
      document.getElementById(sectionId)
    );

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col gap-10 lg:gap-5 justify-between h-full">
        <div className="flex flex-col sm:flex-row gap-4">
          <img
            src="/images/profile.webp"
            alt="avatar"
            className="w-32 h-32 2xl:w-36 2xl:h-36 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-title font-bold text-4xl tracking-tight sm:text-5xl">
              Volodmyr <br className="hidden sm:block" /> Svirhun
            </h3>
            <p className="font-body text-xl 2xl:text-2xl">
              Senior Frontend Developer
            </p>
          </div>
        </div>
        <div className="lg:flex flex-col gap-3 justify-start hidden">
          <HeaderButton
            text="About"
            iconName="CircleUser"
            isActive={selectedSection === SECTIONS.ABOUT}
            onClick={() => scrollToSection(SECTIONS.ABOUT)}
          />
          <HeaderButton
            text="Experience"
            iconName="Sparkles"
            isActive={selectedSection === SECTIONS.EXPERIENCE}
            onClick={() => scrollToSection(SECTIONS.EXPERIENCE)}
          />
          <HeaderButton
            text="Articles"
            iconName="Newspaper"
            isActive={selectedSection === SECTIONS.ARTICLES}
            onClick={() => scrollToSection(SECTIONS.ARTICLES)}
          />
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/svirgunvolodia/"
            className="hover:text-skyBlue w-fit block"
            target="blank"
          >
            <Icon name="Linkedin" size="24" />
          </a>
          <a
            href="https://github.com/svirgunvolodia"
            className="hover:text-skyBlue w-fit block"
            target="blank"
          >
            <Icon name="Github" size="24" />
          </a>
          <a
            href="mailto:svirgun200@gmail.com"
            className="hover:text-skyBlue w-fit block"
          >
            <Icon name="Mail" size="24" />
          </a>
        </div>
      </div>
    </header>
  );
};
