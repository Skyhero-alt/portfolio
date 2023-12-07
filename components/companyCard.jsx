import { FaExternalLinkAlt } from "react-icons/fa";

export default function CompanyCard({
  name,
  logo,
  category,
  role,
  whatIDo,
  duration,
  link,
}) {
  return (
    <div className="border-[1px] my-4 min-h-96 h-full border-gray-900 bg-gray-600 bg-opacity-0 max-w-xl w-full rounded-lg cursor-pointer hover:scale-110 transition-all hover:bg-opacity-30">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="flex flex-col mx-2 h-full">
          <div className="h-24 flex border-b-[1px] border-b-gray-900 p-5 w-full rounded-t-lg">
            <img
              className="rounded-xl bg-gray-300"
              src={logo}
              width={64}
              height="100%"
              alt={name}
            />
            <h3 className="text-lg ml-4 font-semibold text-gray-200">
              <span className="text-green-400 block text-sm">{duration}</span>
              {name}{" "}
              <FaExternalLinkAlt className="inline-block text-sm text-gray-300 mb-1" />
              <span className="text-gray-400 block text-sm">{category}</span>
            </h3>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl ml-4 mt-6 font-semibold text-gray-200">
              Role
            </h3>
            <p className="text-gray-300 ml-4 mt-2">{role}</p>
          </div>

          <div className="flex flex-col mt-5">
            <h3 className="text-xl ml-4 mt-4 font-semibold text-gray-200">
              What I Do
            </h3>
            <p className="text-gray-300 ml-4 mt-2">{whatIDo}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
