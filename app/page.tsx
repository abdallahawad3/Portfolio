import About from "@/sections/About";
import Experience from "@/sections/Expericance";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
};

export default page;
