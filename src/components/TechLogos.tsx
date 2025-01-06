import jsLogo from "../assets/java-script.png";

const TechLogos = () => {
  return (
    <div className="flex">
      {/* <img src={jsLogo} alt="javascript" /> */}
      <div className="border-2 p-2">Javascript</div>
      <div className="border-2 p-2">HTML</div>
      <div className="border-2 p-2">CSS</div>
      <div className="border-2 p-2">React</div>
      <div className="border-2 p-2">Node.js</div>
    </div>
  );
};

export default TechLogos;
