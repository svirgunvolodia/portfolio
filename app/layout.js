import { Inter, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "~/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const trap = localFont({
  src: [
    {
      path: "./fonts/Trap-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Trap-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Trap-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Trap-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Trap-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Trap-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-trap",
});

export const metadata = {
  metadataBase: new URL("https://volodymyrsvirhun.com"),
  title: "Volodymyr Svirhun",
  description: "Senior Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dm_sans.variable} ${trap.variable}`}
    >
      <body className="relative h-screen w-screen overflow-hidden overflow-y-scroll bg-background font-body">
        {children}
      </body>
    </html>
  );
}
