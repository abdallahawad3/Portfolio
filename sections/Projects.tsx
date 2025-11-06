"use client";
import ProjectComponent from "@/components/ProjectComponent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import { use } from "react";

const Projects = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".projects-section h2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 4,
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    }).from(".projects-section .grid", {
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
        markers: true,
      },
    });
  });
  return (
    <section className="my-container projects-section my-20">
      <h2
        style={{
          clipPath: "polygon(50% 0, 50% 1%, 50% 100%, 50% 100%)",
        }}
        className="text-4xl font-bold mb-10 w-fit mx-auto py-4 px-10 lg:px-20 text-center bg-darkblue uppercase"
      >
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
