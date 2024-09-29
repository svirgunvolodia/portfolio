import { Header } from "~/components/Header";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 min-h-screen md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <p className="h-96">About</p>
          <p className="h-96">Experience</p>
          <p className="h-96">Articles</p>
        </main>
      </div>
    </div>
  );
}
