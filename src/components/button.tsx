import { MouseEventHandler } from "react";

const className = "group px-5 py-2 text-center bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 border-2 border-neutral-800 dark:border-white rounded-full transition-all duration-300";

export function Button({ children, onClick }: ButtonProps) {
    return <button onClick={onClick} className={className}>{children}</button>;
}

export function LinkButton({ children, href }: ButtonProps) {
    return <a href={href} className={className}>{children}</a>;
}

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    href?: string;
}