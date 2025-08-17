import { PropsWithChildren } from "react";
import { clsx } from "clsx";

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
	return (
		<div className={clsx("rounded border bg-white shadow-sm", className)}>
			{children}
		</div>
	);
}