"use client";
import MyContactForm from "@/components/MyContactForm";
import dynamic from "next/dynamic";
const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);
const Contact = () => {
  return (
    <section className="my-container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="border rounded-sm p-4">
          <h2 className="text-4xl font-bold mb-4">Get in Touch.🎯</h2>
          <p className="mb-8 text-lg text-foreground/80">
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a question, a project idea, or just want to say
            hello, feel free to reach out using the form below. I look forward
            to hearing from you!
          </p>
          <div>
            <DotLottieReact src="/assets/icons/form.lottie" loop autoplay />
          </div>
        </div>
        <div className="border rounded-sm p-4">
          <MyContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
