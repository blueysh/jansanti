export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
      <div className={"m-2 min-w-[250px] max-w-[300px] min-h-[250px] max-h-[250px] rounded-2xl border-2 border-neutral-900 dark:border-neutral-500 px-5 py-3 " + className}>
        {children}
      </div>
    );
  }