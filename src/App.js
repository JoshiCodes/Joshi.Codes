import Wave from "./components/wave";
import ProjectsContainer from "./components/projects";

function App() {
  return (
      <>
          <div className={"waveContainer"}>
              <section id={"home"}>
                  <div className={"pt-3 lg:pt-12"}>
                      <h1 className={"text-5xl md:text-6xl lg:text-7xl font-bold"}>Willkommen</h1>
                      <h4 className={"hidden md:block px-28 pt-6 lg:pt-12 text-xl md:text-2xl lg:text-3xl text-gray-200"}>Hey, ich bin Joshua und das ist meine Portfolio-Seite.<br/> Hier können Sie meine letzten Projekte sowie etwas über mich finden.</h4>
                      <h4 className={"block md:hidden px-12 pt-6 lg:pt-12 text-xl md:text-2xl lg:text-3xl text-gray-200"}>Hey, ich bin Joshua!<br/>Hier finden Sie meine Projekte sowie etwas über mich!</h4>
                  </div>
              </section>
              <div className={"pt-16 lg:pt-40"}>
                  <Wave />
              </div>
          </div>

          <section id={"about"} className={"mx-3 md:mx-8 pt-8 md:pt-12"}>
              <div className={"pt-3 text-center"}>
                  <h2 className={"text-4xl md:text-6xl font-semibold pb-6"}>Über mich</h2>

              </div>
          </section>

          <section id={"projects"} className={"mx-3 md:mx-8 pt-8 md:pt-12"}>
              <div className={"pt-3 text-center"}>
                  <h2 className={"text-4xl md:text-6xl font-semibold pb-6"}>Meine Projekte</h2>
                  <ProjectsContainer />
              </div>
          </section>

      </>
  );
}

export default App;
