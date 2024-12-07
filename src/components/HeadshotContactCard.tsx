import headshot from "../assets/headshot.jpeg";

const HeadshotContactCard = () => {
  return (
    <div className="p-5 w-full md:w-1/3 md:fixed right-0">
      <div className="border-2 border-b-0">
        <img src={headshot} alt="Benjamin Wright" />
      </div>
      <div className="border-2 p-5">
        <ul className="flex">
          <li className="px-2">
            <a
              href="https://github.com/benjaminbwright"
              className="font-roboto uppercase font-bold"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li className="px-2">
            <a
              href="https://www.linkedin.com/in/benjaminbwright/"
              className="font-roboto uppercase font-bold"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadshotContactCard;
