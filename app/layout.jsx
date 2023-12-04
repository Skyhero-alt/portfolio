import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const karla = Karla({ subsets: ["latin"] });
// try ui sans serif

export const metadata = {
  title: "Sayed Nouman • Skyhero",
  description: "Nouman a dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} flex`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
