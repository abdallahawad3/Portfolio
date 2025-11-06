"use client";
import LightRays from "@/components/LightRays";
import MySplitText from "@/components/SplitText";
import TextType from "@/components/TextType";

const Hero = () => {
  return (
    <section className="hero relative h-screen">
      <div
        className="-z-10"
        style={{ width: "100%", height: "100dvh", position: "absolute" }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#058f2d"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.02}
          noiseAmount={0.3}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="absolute w-full my-container top-40 left-1/2 transform -translate-x-1/2 ">
        <div className="flex justify-center">
          <p className="w-fit text-white bg-[#ffffff0d] border p-2 px-4 rounded-full backdrop-blur-lg flex items-center justify-between text-lg">
            Open To Work
            <span
              aria-label="hidden"
              className="inline-block size-4 bg-green-500 rounded-full ml-2 animate-pulse"
            />
          </p>
        </div>
        <div className="text-center">
          <MySplitText
            tag="h1"
            text="Welcome to My Portfolio"
            className="text-2xl mt-4 md:text-3xl lg:text-4xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <br aria-hidden="true" />
          <MySplitText
            tag="h1"
            text="My name is Abdullah Awad. I develop modern web applications with performance, structure, and scalability in mind."
            className="max-w-[70%] text-xl md:text-2xl lg:text-3xl font-semibold text-center"
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <br aria-hidden="true" />
        <div className="flex justify-center">
          <TextType
            text={[
              "Full-Stack Developer 🚀",
              "React & Node.js Engineer ⚛️",
              "Spring Boot Backend Wizard 🔗",
              "Open Source Enthusiast 🌍",
              "Tech Explorer & Creative Thinker 💡",
              "Turning Ideas Into Digital Reality 💻",
            ]}
            className="text-lg md:text-3xl font-medium text-center mt-2 px-2"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            initialDelay={1500}
            cursorCharacter="_"
          />
        </div>
        <div className="relative lg:bottom-10 space-x-4 flex justify-center flex-wrap mt-8">
          <button
            className="mt-8 px-6 py-3 bg-button-background text-button-foreground rounded-lg text-lg font-semibold hover:bg-button-background/90 cursor-pointer transition-colors"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View My Work
          </button>
          <button
            className="mt-8 px-6 py-3 bg-gray-800 text-button-secondary-foreground rounded-lg text-lg font-semibold hover:bg-gray-800/90 cursor-pointer transition-colors"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
