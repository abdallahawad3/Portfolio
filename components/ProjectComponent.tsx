"use client";
import Image from "next/image";
import GlareHover from "./GlareHover";
import { Badge } from "./ui/badge";
import { BadgeCheckIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectComponent = () => {
  useGSAP(() => {
    const images = document.querySelectorAll(".image");

    images.forEach((img) => {
      const card = img.parentElement as HTMLElement;
      if (!card) return;

      const handleMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const strength = 0.01;

        gsap.to(img, {
          x: offsetX * strength,
          y: offsetY * strength,
          rotationX: -offsetY * 0.02,
          rotationY: offsetX * 0.02,
          transformPerspective: 200,
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

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      // Cleanup
      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });
  });

  return (
    <GlareHover
      glareColor="#ffffff"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
    >
      <div>
        <div className="flex justify-center">
          <Image
            src={"/assets/my.png"}
            alt="Ecommerce project"
            width={400}
            height={300}
            className="image object-contain rounded-lg cursor-pointer"
          />
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-semibold">Ecommerce Website</h3>
          <p className="text-gray-600 mt-2">
            A full-featured ecommerce website built with Next.js and Tailwind
            CSS.
          </p>
          <div className="flex items-center gap-2 flex-wrap mt-2">
            <Badge variant="outline" className="bg-darkblue text-foreground">
              <BadgeCheckIcon />
              React
            </Badge>
            <Badge variant="outline" className="bg-darkblue text-foreground">
              <BadgeCheckIcon />
              Next.js
            </Badge>
            <Badge variant="outline" className="bg-darkblue text-foreground">
              <BadgeCheckIcon />
              Tailwind CSS
            </Badge>
          </div>
        </div>
      </div>
    </GlareHover>
  );
};

export default ProjectComponent;
