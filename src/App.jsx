import './App.css'
import Header from "./components/Header.jsx";
import Welcome from "./components/Welcome.jsx";
import Skills from "./components/Skills.jsx";
// import Projects from "./components/Projects.jsx";
// import Education from "./components/Education.jsx";
// import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
        <main>
          <Welcome />
          <Skills />
          {/*<Projects />
          <Education /> */}
        </main>
        {/* <Footer /> */}
    </>
  );
}