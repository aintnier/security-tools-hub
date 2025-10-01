import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Tools } from "@/components/Tools";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="cloudops-ui-theme">
      <Navbar />
      <Hero />
      <Tools />
      <Features />
      <About />
      <FAQ />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
