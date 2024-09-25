import { Button, LinkButton } from "@/components/button";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="tracking-tighter">
      <Header />
      <section className="p-20 bg-neutral-100 dark:bg-neutral-900">
        <h1 className="text-5xl font-semibold tracking-tighter max-w-[500px]">
          Projects
        </h1>
      </section>
      <section className="px-20 pt-10 pb-5 max-w-[800px]">
        <div className="border-l-2 border-neutral-500 pl-5">
          <h2 className="text-3xl font-bold">Section Not Ready</h2>
          <h3 className="text-xl font-semibold">Check back later!</h3>
        </div>
      </section>
    </main>
  );
}
