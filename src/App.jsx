import './App.css'
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <main>
          <About />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </>
  );
}