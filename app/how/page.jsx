import TechCard from "@/components/techCard";

export default function How() {
  const techData = [
    {
      name: "React",
      type: "Frontend Framework",
      usecase: "I usually use React for building frontend of web applications",
    },
    {
      name: "Next",
      type: "Fullstack Framework",
      usecase:
        "These days I use Next.js for building fullstack web applications",
    },
    {
      name: "Tailwind CSS",
      type: "CSS Framework",
      usecase:
        "My go to CSS framework for building responsive web applications",
    },
    {
      name: "Python",
      type: "Programming Language",
      usecase: "I use Python for building cli applications and for scripting",
    },
    {
      name: "Docker",
      type: "Containerization Tool",
      usecase: "Containerizing Applications and for starting services",
    },
  ];

  return (
    <div className="ml-8 my-20 mr-8">
      <h1 className="text-3xl font-bold text-gray-200">How I Do It</h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {techData.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}
