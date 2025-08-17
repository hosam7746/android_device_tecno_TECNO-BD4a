"use client";

import { A11yToolbar } from "@/components/a11y/Toolbar";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<A11yToolbar />
		</>
	);
}