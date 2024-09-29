"use client";
import Icon from "~/components/common/Icon";

const HeaderButton = ({ text, iconName }) => {
  const width = text.length * 10 + 70;

  return (
    <button
      className="
        group justify-center items-center gap-2 flex h-10 py-2 px-5 bg-background text-black rounded-[4px] relative outline-[(2px, auto)] 
        hover:bg-skyBlue hover:text-white 
      "
      style={{
        width: width,
      }}
    >
      <span
        className="
          absolute w-full h-full top-0 left-0 border border-gray-400 group-hover:border-skyBlue rounded-md 
          transform group-hover:animate-bounceOutside animate-bounceInside
        "
      />
      <span className="pl-2">{text}</span>
      <div className="w-0 opacity-0 group-hover:opacity-100 overflow-visible transition-all transition-slowest ease duration-200 group-hover:w-5">
        <Icon name={iconName} size="18" />
      </div>
    </button>
  );
};

export const Header = () => {
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
          <HeaderButton text="About" iconName="CircleUser" />
          <HeaderButton text="Experience" iconName="Sparkles" />
          <HeaderButton text="Articles" iconName="Newspaper" />
        </div>
      </div>
    </header>
  );
};
