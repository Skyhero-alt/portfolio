export default function ProjectCard({ name, language, description, link }) {
  let langColor = " 🟡";
  if (language === "Javascript") langColor = " 🟡";
  else if (language === "Python") langColor = " 🔵";

  return (
    <div className="w-full border-gray-900 border-[1px] rounded-lg">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col md:flex-row bg-gray-600 bg-opacity-0 rounded-lg hover:bg-opacity-30"
      >
        <div className="md:w-40 py-5 pl-4 w-full h-full text-sm border-r-gray-900 border-r-[1px]">
          <pre>name</pre>
          <span className="text-md text-gray-300 pt-5">{name}</span>
        </div>
        <div className="md:w-40 py-5 pl-4 w-full h-full text-sm border-r-gray-900 border-r-[1px]">
          <pre>language</pre>
          <span className="text-md text-gray-300 pt-5">
            {language} {langColor}
          </span>
        </div>
        <div className="w-full py-5 pl-4 h-full text-sm">
          <pre>description</pre>
          <span className="text-md text-gray-300 pt-5">{description}</span>
        </div>
      </a>
    </div>
  );
}
