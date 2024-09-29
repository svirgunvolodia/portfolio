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
      threshold: 1,
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
      <div className="flex flex-col gap-2">
        <img
          src="/images/profile.webp"
          alt="avatar"
          className="w-40 h-40 rounded-full object-cover"
        />
        <h1 className="font-title font-bold text-5xl">Volodmyr Svirhun</h1>
        <p className="font-body text-2xl">Senior Frontend Developer</p>
        <div className="flex flex-col gap-3 justify-start">
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
      </div>
    </header>
  );
};
