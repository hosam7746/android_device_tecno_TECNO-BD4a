import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
	variant?: "default" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, asChild, variant = "default", ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				ref={ref as any}
				className={clsx(
					"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none h-9 px-4 py-2",
					variant === "outline" ? "border" : "bg-blue-600 text-white hover:bg-blue-700",
					className
				)}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";