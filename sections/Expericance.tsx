"use client";
import SpotlightCard from "@/components/SpotlightCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import dynamic from "next/dynamic";
const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);
const Experience = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".experience-section h2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 4,
      scrollTrigger: {
        trigger: ".experience-section",
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    }).from(".grid .custom-spotlight-card", {
      autoAlpha: 0,
      y: 100,
      duration: 2,
      stagger: {
        each: 0.7,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".experience-section .grid",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  });
  return (
    <section className="my-20 experience-section border-t pt-2">
      <div className="my-container">
        <div className="hero-text-scroll flex justify-center">
          <div className="hero-subtitle ">
            <h2
              className="bg-darkblue w-fit py-4 px-10 text-4xl uppercase"
              style={{ clipPath: "polygon(50% 0, 50% 1%, 50% 100%, 50% 100%)" }}
            >
              My Experience
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <DotLottieReact
              src="/assets/icons/layers.lottie"
              loop
              autoplay
              className="size-14"
            />
            <h3 className="text-xl font-semibold text-foreground/90 my-1">
              Modern Web Development
            </h3>
            <p className="text-base font-medium text-foreground/60">
              Experience in building responsive and dynamic web applications
              using <strong>React</strong>, <strong>Next.js</strong>, and other
              modern frameworks.
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <DotLottieReact
              src="/assets/icons/res.lottie"
              loop
              autoplay
              className="size-14 object-cover"
            />
            <h3 className="text-2xl font-semibold text-foreground/90 my-1">
              Responsive Design
            </h3>
            <p className="text-md font-medium text-foreground/60">
              Skilled in creating mobile-friendly websites that provide an
              optimal viewing experience across a wide range of devices.
            </p>
          </SpotlightCard>

          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <DotLottieReact
              src="/assets/icons/full.lottie"
              loop
              autoplay
              className="size-14 object-cover"
            />
            <h3 className="text-2xl font-semibold text-foreground/90 my-1">
              Fullstack Development
            </h3>
            <p className="text-md font-medium text-foreground/60">
              Proficient in both frontend and backend development, enabling the
              creation of complete web solutions from concept to deployment.
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <DotLottieReact
              src="/assets/icons/ui.lottie"
              loop
              autoplay
              className="size-14 object-cover"
            />
            <h3 className="text-2xl font-semibold text-foreground/90 my-1">
              Interactive UI/UX
            </h3>
            <p className="text-md font-medium text-foreground/60">
              Experience in creating user-friendly interfaces and engaging user
              experiences through intuitive design and interactive elements.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Experience;
