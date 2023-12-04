import CompanyCard from "@/components/companyCard";
import ProjectCard from "@/components/projectCard";

export default function Where() {
  const companyData = [
    {
      name: "TechNode Systems",
      logo: "/images/transLogo.png",
      category: "IoT Company",
      role: "Frontend Engineer",
      whatIDo:
        "I developed an IoT monitoring dashboard, enhancing real-time visibility, and revamped the frontend using Next.js and Tailwind CSS. Implemented customizable widgets, integrated Socket.io for live updates, and configured the production Nginx server for smooth service delivery.",
      duration: "May '23 - Nov '23",
      link: "http://technodes.in/",
    },
  ];

  const projectData = [
    {
      name: "Weframe chat",
      language: "Javascript",
      description:
        "A chat application built using Next.js and Tailwind CSS. PostgreSQL is used for database and Socket.io for real-time updates.",
      link: "https://github.com/Skyhero-alt/weframe-chat",
    },
    {
      name: "Another-yt-cli",
      language: "Python",
      description:
        "A cli application to watch and query youtube right from your terminal 😁. Built using beautifulsoup4 to scrape video sources from youtube",
    },
    {
      name: "Couponzo",
      language: "Javascript",
      description:
        "A headless coupon management system built using React.js and Tailwind CSS. MongoDB is used for database and express.js for backend.",
      link: "https://github.com/omkar-here/CouponZo",
    },
  ];

  return (
    <div className="ml-12 my-14 w-full mr-12">
      <h1 className="text-3xl font-bold text-gray-200">Where I've done it</h1>
      <h3 className="text-lg font-bold text-gray-200 mt-3">Companies</h3>

      <div className="mt-4 flex flex-wrap">
        {companyData.map((company) => (
          <CompanyCard key={company.name} {...company} />
        ))}
      </div>

      <h3 className="text-lg font-bold text-gray-200 mt-4">
        Some Of My Projects
      </h3>
      <div className="mt-4 flex flex-col">
        {projectData.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
