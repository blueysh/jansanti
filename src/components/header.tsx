import { Status } from "@/lib/model/status";
import axios from "axios";
import { useMemo, useState } from "react";

export default function Header() {
  const [status, setStatus] = useState<Status | null>(null);

  useMemo(async () => {
    const { data } = await axios.get("/api/status");
    setStatus(data.data as Status);
    setInterval(async () => {
      const { data } = await axios.get("/api/status");
      setStatus(data.data as Status);
    }, 5000);
  }, []);

  const colors: { [key: string]: string } = {
    online: "bg-green-500 dark:bg-green-300",
    idle: "bg-yellow 500 dark:bg-yellow-300",
    dnd: "bg-red-500 dark:bg-red-300",
    offline: "bg-gray-600",
  };

  return (
    <header className="p-5 bg-white dark:bg-black border-b-2 border-neutral-400 dark:border-white z-50 top-0 sticky">
      <div className="flex flex-row">
        <div className="flex flex-row">
          <h4 className="text-2xl font-[550] tracking-tighter">jansanti</h4>
          <div
            className={`animate-pulse w-2 h-2 p-1 my-auto mx-2 ${
              status
                ? Object.values(colors)[
                    Object.keys(colors).indexOf(status.discord_status)
                  ]
                : colors.offline
            } rounded-full`}
          />
        </div>

        <span className="w-full" />

        <div className="flex flex-row space-x-2">
          <a
            href="/"
            className="text-lg font-medium underline underline-offset-4 hover:underline-offset-8 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/projects"
            className="text-lg font-medium underline underline-offset-4 hover:underline-offset-8 transition-all duration-300"
          >
            Projects
          </a>
        </div>
      </div>
    </header>
  );
}
