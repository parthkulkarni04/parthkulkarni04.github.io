import Link from "next/link";

import { cn } from "@/lib/utils";

function ResumeCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-lg px-5 py-6 aspect-[3/4] text-slate-950 shadow-xl text-lg overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 z-[-2] bg-slate-100 bg-[radial-gradient(100%_100%_at_20%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <h2 className="text-3xl font-semibold">Parth Kulkarni</h2>
      <p className="font-medium mb-4 text-slate-600">Aspiring Deep Learning Engineer</p>
      <Link href={"mailto:parthpsk0517@gmail.com"}>
        <p className="underline underline-offset-2">parthpsk0517@gmail.com</p>
      </Link>
      <p className="mb-4">Pune, India</p>
      <p
        className="text-slate-700 font-medium mb-4"
        style={{
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      >
        I am Parth, an aspiring Machine Learning Engineer
      </p>

      <p className="text-xl font-semibold mb-2">Skills</p>
      {/* <div className="space-y-1">
        <p className="text-base">
          <span className="underline">Web technologies</span>: JavaScript
          (ES6+), React js, Next js, TypeScript, Tailwind, Node, MongoDB, HTML,
          CSS, SCSS, Express, Postgresql
        </p>
        <p className="text-base">
          <span className="underline">Fundamentals</span>: OOP, Data Structures
          & Algorithms, Agile
        </p>
        <p className="text-base">
          <span className="underline">Tools</span>: Git, Github, Jenkins
          (CI/CD), Jira
        </p>
      </div> */}
    </div>
  );
}

export default ResumeCard;
