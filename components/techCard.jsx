import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

export default function TechCard({ name, type, usecase, tech }) {
  const techIcon = {
    React: <FaReact className="text-3xl m-auto text-blue-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-4xl m-auto text-blue-500" />,
    Python: <FaPython className="text-4xl m-auto text-yellow-300" />,
    Docker: <FaDocker className="text-4xl m-auto text-blue-300" />,
    Next: <TbBrandNextjs className="text-4xl m-auto text-white" />,
  };

  return (
    <div className="w-full border-gray-900 border-[1px] rounded-lg cursor-pointer">
      <div className="flex flex-col md:flex-row bg-gray-600 bg-opacity-0 rounded-lg hover:bg-opacity-30">
        <div className="md:w-40 flex justify-center items-center text-sm border-r-gray-900 border-r-[1px]">
          {techIcon[name]}
        </div>
        <div className="md:w-40 py-5 pl-4 w-full h-full text-sm border-r-gray-900 border-r-[1px]">
          <pre>name</pre>
          <span className="text-md text-gray-300 pt-5">{name}</span>
        </div>
        <div className="md:w-40 py-5 pl-4 w-full h-full text-sm border-r-gray-900 border-r-[1px]">
          <pre>type</pre>
          <span className="text-md text-gray-300 pt-5">{type}</span>
        </div>

        <div className="w-full py-5 pl-4 h-full text-sm">
          <pre>usecase</pre>
          <span className="text-md text-gray-300 pt-5">{usecase}</span>
        </div>
      </div>
    </div>
  );
}
