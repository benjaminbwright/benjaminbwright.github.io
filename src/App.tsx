import Header from "./components/Header";
import HeadshotContactCard from "./components/HeadshotContactCard";
import "./App.css";
import TechLogos from "./components/TechLogos";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row-reverse items-start">
        <HeadshotContactCard />
        <div className="font-roboto p-5 w-full md:w-2/3 md:border-e-2">
          <h2 className="font-roboto font-bold uppercase text-4xl">
            A Passion For Building
          </h2>
          <p>
            I'm a passionate self-taught software engineer who likes to get my
            hands dirty. I cut my teeth building building websites and server
            environments in the Broadway and Off-Broadway theatrical industry.
            Working in that industry was challenging because of the constant
            flow of new ideas that had to quickly be expressed on the web.
          </p>
          <h2 className="font-roboto font-bold uppercase text-4xl">
            Technologies
          </h2>
          <TechLogos />
        </div>
      </main>
    </>
  );
}

export default App;
