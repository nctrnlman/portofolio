import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div>
      <ToastProvider>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </ToastProvider>
    </div>
  );
}

export default App;
