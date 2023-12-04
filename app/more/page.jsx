export default function More() {
  return (
    <div className="ml-8 my-20 max-w-2xl mr-8">
      <h1 className="text-3xl font-bold text-gray-200">etc</h1>
      <h3 className="text-lg font-bold text-gray-200 mt-3">Contact</h3>
      <p className="text-gray-300 mt-2">
        If one of my projects caught your eye, or you just want to say hi, my
        inbox is always open. I'll try my best to get back to you!
        <a
          href="mailto:skyhero.code@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          {" "}
          skyhero.code@gmail.com
        </a>
      </p>

      <p className="text-gray-300 mt-2">
        I am most responsive on discord. You can find me on discord as{" "}
        <span className="text-green-400">skyhero.codes</span>.
      </p>

      <h3 className="text-lg font-bold text-gray-200 mt-4">Resume</h3>
      <p className="text-gray-300 mt-2">
        If you want to know more about my experiences, here's my{" "}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          resume
        </a>
      </p>

      <h3 className="text-lg font-bold text-gray-200 mt-4">Other</h3>
      <ul>
        <li>
          Twitter:
          <a
            href="https://twitter.com/skyhero_root"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            {" "}
            @skyhero_root
          </a>
        </li>
      </ul>
    </div>
  );
}
