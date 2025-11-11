"use client";
import ProjectComponent from "@/components/ProjectComponent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".projects-section .grid", {
      autoAlpha: 0,
      y: 100,
      duration: 2,
      stagger: {
        each: 0.7,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".projects-section .grid",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
      },
    });
  });
  return (
    <section className="my-container projects-section my-20 border-t pt-2">
      <h2 className="text-4xl font-bold mb-10 w-fit mx-auto py-4 px-10 lg:px-20 text-center bg-darkblue uppercase">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
      </div>
    </section>
  );
};

export default Projects;
