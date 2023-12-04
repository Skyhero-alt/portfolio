export default function Home() {
  return (
    <div className="ml-8 my-20 max-w-2xl mr-8">
      <h1 className="text-3xl font-bold text-gray-200">What I Do</h1>
      <p className="mt-4 text-gray-400">
        Nouman <i>aka</i> Skyhero. 21 y/o developer, student and casual gamer.
      </p>

      <p className="mt-4 text-gray-400">
        I am a passionate developer who loves to code and learn new things
        ranging from discord bots, scraping, web development and more.
      </p>

      <p className="mt-4 text-gray-400">
        And I am undergraduate student at
        {" M. H. Saboo Siddik College of Engineering"} currently pursuing my
        bachelor's of Engineering in Information Technology.
      </p>

      <h1 className="text-3xl font-bold text-gray-200 mt-8">
        What am I doing these days
      </h1>
      <p className="mt-4 text-gray-400">
        I am currently working on a few projects. One of them being an out house
        project for my college at{" "}
        <a
          href="https://www.tcs.tifr.res.in/web/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400"
        >
          TIFR
        </a>
        . I am also learning a few new technologies like Messaging Queues and
        Kubernetes.
      </p>
    </div>
  );
}
