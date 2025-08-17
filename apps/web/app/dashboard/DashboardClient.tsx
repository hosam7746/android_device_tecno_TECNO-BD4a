"use client";

import { useSearchParams } from "next/navigation";

export default function DashboardClient() {
	const params = useSearchParams();
	const role = params.get("role") ?? "student";
	return (
		<div className="grid gap-4">
			<h1 className="text-xl font-semibold">لوحة التحكم</h1>
			<div className="flex gap-2 text-sm">
				<a className={`border rounded px-3 py-1 ${role === "student" ? "bg-gray-100" : ""}`} href="/dashboard?role=student">طالب</a>
				<a className={`border rounded px-3 py-1 ${role === "guardian" ? "bg-gray-100" : ""}`} href="/dashboard?role=guardian">وليّ أمر</a>
				<a className={`border rounded px-3 py-1 ${role === "educator" ? "bg-gray-100" : ""}`} href="/dashboard?role=educator">معلم</a>
				<a className={`border rounded px-3 py-1 ${role === "admin" ? "bg-gray-100" : ""}`} href="/dashboard?role=admin">إدارة</a>
			</div>
			{role === "student" && (
				<div className="grid gap-2">
					<p>أنشطة اليوم، الشارات، التذكيرات.</p>
				</div>
			)}
			{role === "guardian" && (
				<div className="grid gap-2">
					<p>ملخص أسبوعي، توصيات منزلية، حجز جلسات.</p>
				</div>
			)}
			{role === "educator" && (
				<div className="grid gap-2">
					<p>قائمة الطلاب، تعيين أنشطة، خطط IEP مبسطة.</p>
				</div>
			)}
			{role === "admin" && (
				<div className="grid gap-2">
					<p>إدارة المستخدمين والمحتوى والتحليلات.</p>
				</div>
			)}
		</div>
	);
}