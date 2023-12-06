"use client";

import { useEffect, useState } from "react";
import { BsCursor } from "react-icons/bs";
import useSound from "use-sound";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [sound] = useSound("/sounds/switch-page.mp3");
  const [currPath, setCurrPath] = useState(pathname);

  useEffect(() => {
    sound();
    setCurrPath(pathname);
  }, [pathname]);

  return (
    <>
      <div className="md:fixed hidden md:block text-md h-screen pl-8 max-w-[250px] w-full border-r-gray-900 border-r-[1px] py-8">
        <ul>
          <li className="text-md text-gray-300 font-bold my-4">
            <span>Sayed Nouman</span>
            <span className="relative text-gray-300 text-sm block mt-2 cursor-pointer">
              <a href="https://www.google.com/maps/search/Mumbai">
                <BsCursor className="text-xl text-green-500 inline-block" />
                <span className="absolute top-1 ml-2 h-full hover:text-gray-400">
                  Mumbai
                </span>
              </a>
            </span>
          </li>
          <li
            className={`py-2 hover:text-gray-200 cursor-pointer ${
              currPath === "/"
                ? "text-gray-200 border-r-2 border-gray-200"
                : "text-gray-400"
            }`}
            onClick={() => {
              router.push("/");
            }}
          >
            what i do
          </li>
          <li
            className={`py-2 text-gray-400 hover:text-gray-200 cursor-pointer ${
              currPath === "/where"
                ? "text-gray-200 border-r-2 border-gray-200"
                : "text-gray-400"
            }`}
            onClick={() => {
              router.push("/where");
            }}
          >
            where i've done it
          </li>
          <li
            className={`py-2 text-gray-400 hover:text-gray-200 cursor-pointer ${
              currPath === "/how"
                ? "text-gray-200 border-r-2 border-gray-200"
                : "text-gray-400"
            }`}
            onClick={() => {
              router.push("/how");
            }}
          >
            how i do it
          </li>
          <li
            className={`py-2 text-gray-400 hover:text-gray-200 cursor-pointer ${
              currPath === "/more"
                ? "text-gray-200 border-r-2 border-gray-200"
                : "text-gray-400"
            }`}
            onClick={() => {
              router.push("/more");
            }}
          >
            more+contact
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 items-center justify-center flex w-full mb-8">
          <Link href="https://github.com/Skyhero-alt">
            <FiGithub className="text-gray-400 text-2xl hover:text-gray-200 cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/skyhero/">
            <FaLinkedin className="text-gray-400 text-2xl hover:text-gray-200 cursor-pointer ml-4" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
