import Background from "./components/Background";
import Logo from "./assets/logo.svg";
import {
  Header,
  Divider,
  About,
  Connect,
  Experience,
  Projects,
  Skills,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Background />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[520px] flex flex-col items-center justify-center bg-(--color-card-bg) border border-(--color-border-light) rounded-2xl p-5 m-5 backdrop-blur-xl shadow-xl md:border md:shadow-lg">
        <Header />
        <Divider />
        <About />
        <Connect />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default App;
