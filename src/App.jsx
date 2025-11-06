import Background from "./components/Background";
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
    <div className="relative min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#0f0f1e_0%,#1a1a2e_50%,#16213e_100%)]">
      <Background />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[720px] flex flex-col items-center justify-center bg-transparent px-10 py-5 responsive-card">
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
