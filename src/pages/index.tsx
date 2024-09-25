import { Button, LinkButton } from "@/components/button";
import Card from "@/components/card";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="tracking-tighter">
      <Header />
      <section className="p-20 bg-neutral-100 dark:bg-neutral-900">
        <h1 className="text-5xl mb-6 font-semibold tracking-tighter max-w-[500px]">
          Designing intuitively so others work productively.
        </h1>
        <LinkButton href="https://docs.google.com/document/d/1QEXFCTEdLbsXSvgLlJ6LAgW--SwMtjUYpzziAngL5nw/edit#heading=h.50pkkh1na2mq">
          See Resume{" "}
          <span className="font-sans absolute ml-1 group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
          <span className="font-sans opacity-0">↗</span>
        </LinkButton>
      </section>
      <section className="px-20 pt-10 pb-5 max-w-[1200px] mx-auto">
        <div className="border-l-2 border-neutral-500 pl-5">
          <h2 className="text-3xl font-bold">My name is Jan Santiago.</h2>
          <h3 className="text-xl font-semibold">CS Student, Class of 2025</h3>
        </div>
        <p className="text-lg my-2 max-w-[700px]">
          I&apos;m a Puerto Rican full-stack developer and musician living in
          the United States. I&apos;m currently a student at Newton College &
          Career Academy in the Computer Science pathway. My goal is to build
          valuable experiences for people through intuitive software.
        </p>
        <p className="text-lg my-2 max-w-[700px]">
          For frontend, I use Next.js and Tailwind. For backend, I typically use
          Spring with Java. I&apos;m always looking to learn new things and
          improve my skills.
        </p>
        <p className="text-lg my-2 max-w-[700px]">
          Outside of that, I work at Chick-fil-A as a Team Captain. I&apos;ve
          been working there for 2 years, and have learned a lot about
          leadership and teamwork. For fun, I like to play video games, spend
          time with friends, and listen to music (I play piano, too).
        </p>
      </section>
      <section className="px-20 py-5 max-w-[1200px] mx-auto">
        <h2 className="text-2xl">Contact</h2>
        <p className="text-lg my-2">
          <a className="underline" href="mailto:hi@jansanti.me">
            Email
          </a>{" "}
          |{" "}
          <a className="underline" href="https://github.com/blueysh">
            GitHub
          </a>{" "}
          |{" "}
          <a
            className="underline"
            href="https://discord.com/users/594576995090956313"
          >
            Discord
          </a>{" "}
          |{" "}
          <a className="underline" href="https://x.com/blueysh_">
            X
          </a>
        </p>
      </section>
      <section className="px-20 py-5 max-w-[1200px] mx-auto">
        <h2 className="text-2xl">Highlights</h2>
        <span className="opacity-50 text-xl">(scroll left and right)</span>
        <div className="flex flex-row space-x-2 overflow-x-scroll snap-x snap-mandatory">
          <Card className="snap-center">
            <h5 className="text-center text-2xl">
              National Hispanic Recognition Program Scholar
            </h5>
            <hr className="my-2" />
            <p className="my-auto text-center">
              Awarded August 1, 2023 by the College Board
            </p>
          </Card>
          <Card className="snap-center">
            <h5 className="text-center text-2xl">
              Congressional App Challenge Participant
            </h5>
            <hr className="my-2" />
            <p className="my-auto text-center">
              Participated during the 2023-2024 School Year
            </p>
          </Card>
          <Card className="snap-center">
            <h5 className="text-center text-2xl">
              Future Business Leaders of America (FBLA) Member
            </h5>
            <hr className="my-2" />
            <p className="my-auto text-center">2-year Member in 2024</p>
          </Card>
          <Card className="snap-center">
            <h5 className="text-center text-2xl">
              Pennsylvania House of Representatives Leadership Award
            </h5>
            <hr className="my-2" />
            <p className="my-auto text-center">Awarded in 2018</p>
          </Card>
          <Card className="snap-center">
            <h5 className="text-center text-2xl">
              President&apos;s Award for Education Excellence
            </h5>
            <hr className="my-2" />
            <p className="my-auto text-center">Awarded in 2018</p>
          </Card>
        </div>
      </section>
    </main>
  );
}
