"use client";
import GlassIcons from "@/components/GlassIcons";
import LogoLoop from "@/components/LogoLoop";
import { useGSAP } from "@gsap/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import {
  SiHtml5,
  SiCss3,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const techLogos = [
  {
    node: (
      <DotLottieReact
        src="/assets/icons/react.lottie"
        loop
        autoplay
        className="size-20"
      />
    ),
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiExpress className="size-20 text-gray-700" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: (
      <DotLottieReact
        src="/assets/icons/ts.lottie"
        loop
        autoplay
        className="size-20"
      />
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiHtml5 className="size-20 text-orange-600" />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: (
      <DotLottieReact
        src="/assets/icons/mongo.lottie"
        loop
        autoplay
        className="size-20"
      />
    ),
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: (
      <DotLottieReact
        src="/assets/icons/node.lottie"
        loop
        autoplay
        className="size-20"
        backgroundColor="#339933"
      />
    ),
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiTailwindcss className="size-20 text-blue-500" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiCss3 className="size-20 text-blue-600" />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: (
      <DotLottieReact
        src="/assets/icons/next.lottie"
        loop
        autoplay
        speed={1}
        backgroundColor="#fff"
        className="size-20 rounded-full"
      />
    ),
    title: "Next.js",
    href: "https://nextjs.org",
  },

  {
    node: <SiRedux className="size-20 text-purple-600" />,
    title: "Redux",
    href: "https://redux.js.org",
  },
  {
    node: (
      <DotLottieReact
        src="/assets/icons/js.lottie"
        loop
        autoplay
        className="size-20"
      />
    ),
    title: "Javascript",
    href: "https://www.javascript.com",
  },

  {
    node: <SiShadcnui className="size-20 text-pink-500" />,
    title: "Shadcn UI",
    href: "https://shadcn.com",
  },
];
const Skills = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#skills h2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 4,
      scrollTrigger: {
        trigger: "#skills h2",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  });
  return (
    <section className="py-20 border-t" id="skills">
      <h2
        className="bg-darkblue mx-auto w-fit py-4 px-10 text-4xl uppercase mb-5"
        style={{ clipPath: "polygon(50% 0, 50% 1%, 50% 100%, 50% 100%)" }}
      >
        My Technical Skills
      </h2>

      <div className="my-container flex flex-col items-center ">
        <LogoLoop
          logos={techLogos}
          speed={150}
          direction="left"
          logoHeight={48}
          gap={20}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0d1117"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};

export default Skills;
