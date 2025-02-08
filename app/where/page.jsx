import CompanyCard from "@/components/companyCard";
import ProjectCard from "@/components/projectCard";

export default function Where() {
  const companyData = [
    {
      name: "QAD Inc.",
      logo: "/images/qadLogo.jpg",
      category: "Software Company",
      role: "Graduate Engineering Trainee",
      whatIDo:
        // something related to creating new menus and browses and fixing reports
        "I am working on the QAD Enterprise Applications, a cloud-based ERP system. I developed new menus, browses, and reports using Progress 4GL and QAD's proprietary tools.",
      duration: "Aug '24 - Present",
      link: "https://www.qad.com/",
    },
    {
      name: "Tata Institute of Fundamental Research",
      logo: "/images/tifrLogo.png",
      category: "Research Institute",
      role: "Project Intern (Web Development)",
      whatIDo:
        "I developed an IT inventory management system using LAMP stack for keeping track of assets, users, and their roles, Invoices and purchase orders. I used CodeIgniter for the backend and Alpine js for the frontend interactivity.",
      duration: "Aug '23 - May '24",
      link: "https://www.tifr.res.in/",
    },
    {
      name: "TechNode Systems",
      logo: "/images/transLogo.png",
      category: "IoT Company",
      role: "Frontend Engineering Intern",
      whatIDo:
        "I developed an IoT monitoring dashboard, enhancing real-time visibility, and revamped the frontend using Next.js and Tailwind CSS. Implemented customizable widgets, integrated Socket.io for live updates, and configured the production Nginx server for smooth service delivery.",
      duration: "May '23 - Oct '23",
      link: "https://technode.co.in/",
    },
  ];

  const projectData = [
    {
      name: "Weframe chat",
      language: "Javascript",
      description:
        "A chat application built using Next.js and Tailwind CSS. PostgreSQL is used for database and Socket.io for real-time updates.",
      link: "https://github.com/Skyhero-alt/weframe_chat",
    },
    {
      name: "Another-yt-cli",
      language: "Python",
      description:
        "A cli application to watch and query youtube right from your terminal 😁. Built using beautifulsoup4 to scrape video sources from youtube",
      link: "https://github.com/Skyhero-alt/another-yt-cli",
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
    <div className="ml-8 mr-8 my-16 md:mt-12">
      <h1 className="text-3xl font-bold text-gray-200">Where I've done it</h1>
      <h3 className="text-lg font-bold text-gray-200 mt-3">Companies</h3>

      <div className="mt-4 flex flex-wrap gap-5">
        {companyData.map((company) => (
          <CompanyCard key={company.name} {...company} />
        ))}
      </div>

      <h3 className="text-lg font-bold text-gray-200 mt-4">
        Some Of My Projects
      </h3>
      <div className="mt-4 flex flex-col gap-2">
        {projectData.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
