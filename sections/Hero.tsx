"use client";
import LightRays from "@/components/LightRays";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import Image from "next/image";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero p", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    }).from(
      "img",
      {
        autoAlpha: 0,
        scale: 0,
        duration: 1,
        ease: "bounce.out",
      },
      "<"
    );
    tl.from(".hero h1 strong", {
      y: -200,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
      stagger: 0.2,
    })
      .from(".hero h1 span", {
        y: 200,
        rotate: -50,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .from(".list-mobile", {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .from(".list-mobile li", {
        x: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      })
      .from(".list", {
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
      })

      .from(".list li", {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      });
    gsap.from(".circleText", {
      rotation: -360,
      transformOrigin: "50% 50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);
  return (
    <section className="hero relative  h-screen overflow-hidden">
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

      <div className="absolute  w-full h-full my-container top-40 left-1/2 transform -translate-x-1/2 ">
        <div className="relative h-full">
          <p className="text-xl md:text-3xl relative -top-9 lg:text-4xl font-extrabold text-center  mt-10 md:mt-0 lg:mb-6 bg-linear-to-r from-header-foreground to-darkpurple bg-clip-text text-transparent">
            Hi, There I&apos;m Abdullah Awad
          </p>
          <div className="md:hidden">
            <h1 className="text-center text-5xl font-extrabold font-barlow">
              Front-End Developer
            </h1>
            <Image
              src={"/assets/hero.png"}
              alt="Hero Image"
              width={1000}
              height={1000}
              className="mx-auto pointer-events-none w-full max-w-lg object-contain"
            />
          </div>
          <div className="hidden  md:flex justify-center gap-2 w-full lg:items-center lg:w-fit h-full">
            <h1 className="text-center text-6xl md:text-5xl lg:text-[170px] font-extrabold  font-barlow">
              <strong className="lg:absolute lg:top-0 lg:left-55 z-10">
                Front
              </strong>
              <strong className="lg:absolute lg:top-0 lg:right-77 z-10">
                End
              </strong>
              <span className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-35 -rotate-5 z-10">
                Developer
              </span>
            </h1>
            <Image
              src={"/assets/hero.png"}
              alt="Hero Image"
              width={1000}
              height={1000}
              className="hidden md:block mx-auto pointer-events-none w-full max-w-lg lg:max-w-2xl object-contain absolute left-1/2 -translate-x-1/2 -top-10 "
            />
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <svg className="circleText " viewBox="0 0 500 500" data-duration="5">
            <path
              id="textcircle"
              fill="none"
              stroke="#FF9800"
              strokeWidth="5"
              data-duration="5"
              d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
            ></path>

            <text dy="-25">
              <textPath xlinkHref="#textcircle">
                . FRONTEND . REACT . NODE . EXPRESS{" "}
              </textPath>
            </text>
          </svg>
        </div>
        <div className="list hidden lg:block bg-amber-100 text-accent-foreground absolute  lg:top-25 p-2 rounded-[1px] lg:right-10">
          <ol>
            <li>⦿ Full-Stack Web Development</li>
            <li>⦿ Responsive Web Design</li>
            <li>⦿ Performance Optimization</li>
            <li>⦿ Cross-Browser Compatibility</li>
            <li>⦿ Version Control with Git</li>
            <li>⦿ API Integration</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
