"use client";
import LightRays from "@/components/LightRays";
import MySplitText from "@/components/SplitText";
import TextType from "@/components/TextType";

const Hero = () => {
  return (
    <div className="hero relative h-screen">
      <div
        className="-z-10"
        style={{ width: "100%", height: "100dvh", position: "absolute" }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={0.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 ">
        <MySplitText
          text="Welcome to My Portfolio"
          className="text-2xl md:text-5xl lg:text-7xl font-semibold text-center"
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
        <br />
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
            className="text-2xl md:text-3xl font-medium text-center mt-4 px-2"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            initialDelay={1500}
            cursorCharacter="_"
          />
        </div>
        <div className="space-x-4 flex justify-center mt-8">
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
    </div>
  );
};

export default Hero;
