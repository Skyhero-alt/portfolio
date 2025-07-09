"use client";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const calculateAge = (birthDateString) => {
      const today = new Date();
      const birthDate = new Date(birthDateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() >= birthDate.getDate());

      if (!hasBirthdayPassed) {
        age--;
      }
      return age;
    };

    const myBirthDate = "2002-06-14";
    setAge(calculateAge(myBirthDate));
  }, []);
  const [age, setAge] = useState(null);

  return (
    <div className="ml-8 mt-16 md:mt-12 max-w-2xl mr-8">
      <h1 className="text-3xl font-bold text-gray-200">What I Do</h1>
      <p className="mt-4 text-gray-400">
        Nouman <i>aka</i> Skyhero. {age !== null ? `${age} y/o` : "..."}{" "}
        developer and casual gamer.
      </p>

      <p className="mt-4 text-gray-400">
        I am a developer from India who loves to code and learn new things
        ranging from discord bots, scraping, web development and more.
      </p>

      <p className="mt-4 text-gray-400">
        And have completed my bachelor's degree in Information Technology from
        {" M. H. Saboo Siddik College of Engineering"}.
      </p>

      <h1 className="text-3xl font-bold text-gray-200 mt-8">
        What am I doing these days
      </h1>
      <p className="mt-4 text-gray-400">
        {/* I am currently working on a few projects. One of them being an out house
        project for my college at{" "}
        <a
          href="https://www.tcs.tifr.res.in/web/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400"
        >
          TIFR{" "}
        </a> */}
        I am currently working as a Graduate Engineering Trainee at
        <a
          href="https://www.qad.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400"
        >
          {" "}
          QAD Inc.{" "}
        </a>
        Where I work on Implementing new features and fixing bugs that exist in
        their ERP software. I am also learning a few new technologies like
        messaging queues and container orchestrators.
      </p>
    </div>
  );
}
