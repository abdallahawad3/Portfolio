import { Code, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkblue py-20">
      <div className="text-center py-4 text-sm text-shadow-darkblue">
        <p>
          Made with ❤️ by <strong>Abdullah Awad</strong>
        </p>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>

      <div className="buttons flex justify-center gap-1 bottom-0 w-full">
        <button
          aria-label="GitHub"
          className="relative bg-foreground/20 p-2 rounded-sm cursor-pointer text-white flex justify-center items-center hover:bg-foreground/22 transition"
        >
          <Link href={"/"}>
            <Github className="inline-block" />
          </Link>
        </button>
        <button
          aria-label="LinkedIn"
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
          className="relative bg-foreground/20 p-2 rounded-sm cursor-pointer text-white flex justify-center items-center hover:bg-foreground/22 transition"
        >
          <Link href={"/"}>
            <Code className="inline-block" />
          </Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
