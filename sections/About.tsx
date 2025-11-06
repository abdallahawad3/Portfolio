"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Code, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
gsap.registerPlugin(SplitText);
const About = () => {
  useGSAP(() => {
    const img = document.querySelector(".image") as HTMLElement | null;
    if (!img) return;

    const container = img.parentElement?.parentElement as HTMLElement;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 4;
      const offsetY = e.clientY - rect.top - rect.height / 4;

      const strength = 0.002;
      gsap.to(img, {
        x: offsetX * strength,
        y: offsetY * strength,
        rotationX: -offsetY * 0.0001,
        rotationY: offsetX * 0.0001,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    const handleLeave = () => {
      gsap.to(img, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        ease: "power3.out",
        duration: 0.8,
      });
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });

    const splitHeadings = SplitText.create("#about h2", {
      type: "words,chars",
    });
    const p1 = SplitText.create("#about #p1", {
      type: "words,chars",
    });
    const p2 = SplitText.create("#about #p2", {
      type: "words,chars",
    });
    const p3 = SplitText.create("#about #p3", {
      type: "words,chars",
    });

    tl.from(splitHeadings.chars, {
      autoAlpha: 0,
      y: 20,
      stagger: 0.3,
      scrollTrigger: {
        trigger: "#about h2",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });

    tl.from(p1.words, {
      autoAlpha: 0,
      stagger: 0.02,
      scrollTrigger: {
        trigger: "#p1",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    })
      .from(
        p2.words,
        {
          autoAlpha: 0,
          stagger: 0.02,
          scrollTrigger: {
            trigger: "#p2",
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        },
        ">"
      )
      .from(
        p3.words,
        {
          autoAlpha: 0,
          stagger: 0.02,
          scrollTrigger: {
            trigger: "#p3",
            start: "top 80%",
            end: "top 55%",
            scrub: true,
          },
        },
        ">"
      );
    tl.from(".img", {
      autoAlpha: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".img",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
    });
    tl.from(".buttons", {
      autoAlpha: 0,
      y: 20,
      stagger: {
        each: 0.2,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".buttons",
        start: "top 90%",
        end: "top 75%",
        scrub: true,
      },
    });
  });
  return (
    <section>
      <div
        className="my-container py-10 mb-20 border-4 border-gray-800 rounded-md relative"
        id="about"
      >
        <div className="absolute top-2 left-2 flex space-x-1">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500 " />
          <span className="inline-block w-5 h-5 rounded-full bg-yellow-500" />
          <span className="inline-block w-5 h-5 rounded-full bg-green-500" />
        </div>
        {/* Content */}
        <div className="grid grid-cols-1  justify-items-center md:grid-cols-2">
          {/* Left side */}
          <div className="h-full relative">
            <h2 className="text-4xl mt-4 font-bold mb-6">About Me</h2>
            <ul className="mt-10">
              <li>
                <p id="p1" className="text-md leading-6 mb-4">
                  I’m Abdullah, a passionate{" "}
                  <strong>Full-Stack Developer</strong> with a love for building
                  fast, scalable, and meaningful digital experiences. I combine
                  creativity with deep technical expertise to transform ideas
                  into elegant, high-performance web applications.
                </p>
              </li>
              <li>
                <p id="p2" className="text-md leading-6 mb-4">
                  I specialize in <strong>React</strong>,
                  <strong>Node.js</strong>, crafting solutions that blend clean
                  design, efficient architecture, and smooth user interaction.
                  From developing <strong>eCommerce platforms</strong> and{" "}
                  <strong>web applications</strong> to smart POS and management
                  systems, I focus on delivering results that make real impact.
                </p>
              </li>
              <li>
                <p id="p3" className="text-md leading-6 mb-4">
                  Beyond coding, I’m a lifelong learner who thrives on staying
                  ahead of industry trends and continuously enhancing my skill
                  set. I’m excited about collaborating on innovative projects
                  that push boundaries and create exceptional digital
                  experiences.
                </p>
              </li>
            </ul>
            <div className="buttons flex gap-1 absolute z-10 bottom-0 w-full">
              <button
                aria-label="GitHub"
                id="github"
                className="relative bg-foreground/20 p-2 rounded-sm cursor-pointer text-white flex justify-center items-center hover:bg-foreground/22 transition"
              >
                <Link href={"/"}>
                  <Github className="inline-block" />
                </Link>
              </button>
              <button
                aria-label="LinkedIn"
                id="linkedin"
                className="relative bg-foreground/20 p-2 rounded-sm cursor-pointer text-white flex justify-center items-center hover:bg-foreground/22 transition"
              >
                <Link href={"/"}>
                  <Linkedin className="inline-block" />
                </Link>
              </button>
              <button
                title="Resume"
                aria-label="Resume"
                aria-haspopup="true"
                id="resume"
                className="relative bg-foreground/20 p-2 rounded-sm cursor-pointer text-white flex justify-center items-center hover:bg-foreground/22 transition"
              >
                <Link href={"/"}>
                  <Code className="inline-block" />
                </Link>
              </button>
            </div>
          </div>
          {/* Right side */}
          <div className="img justify-end mt-10 md:mt-0">
            <Image
              sizes="(max-width: 768px) 100vw, 572px"
              src="/assets/my.png"
              loading="eager"
              alt="This is Abdullah"
              width={550}
              height={550}
              className="image rounded-md object-contain h-auto w-full  mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
