import "./globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
	title: "ابتكار | Ibtikar",
	description: "منصة تعليمية مخصصة لذوي الاحتياجات الخاصة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ar" dir="rtl">
			<body className={clsx("min-h-screen antialiased")}> 
				<div className="sr-only" id="skip">
					<a href="#main" className="focus:not-sr-only focus:absolute focus:top-2 focus:right-2 bg-white text-black p-2 rounded">تجاوز إلى المحتوى</a>
				</div>
				<Providers>
					<header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
						<nav className="max-w-6xl mx-auto flex items-center gap-4 p-4 text-sm">
							<a className="font-bold" href="/">ابتكار</a>
							<a href="/learn">تعلّم</a>
							<a href="/activities">تمارين</a>
							<a href="/dashboard">لوحتي</a>
							<a href="/login" className="ml-auto">دخول</a>
						</nav>
					</header>
					<main id="main" className="max-w-6xl mx-auto p-4">
						{children}
					</main>
				</Providers>
			</body>
		</html>
	);
}