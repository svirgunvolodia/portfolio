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
      </div>
    </header>
  );
};
