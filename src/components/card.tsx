export default function Card({ children }: { children: React.ReactNode }) {
    return (
      <div className="m-2 min-w-[300px] max-w-[300px] min-h-[250px] max-h-[250px] rounded-2xl border-2 border-neutral-900 dark:border-neutral-500 px-10 py-3">
        {children}
      </div>
    );
  }