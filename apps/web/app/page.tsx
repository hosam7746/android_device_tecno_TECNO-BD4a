export default function HomePage() {
	return (
		<div className="grid gap-6">
			<section aria-labelledby="welcome">
				<h1 id="welcome" className="text-2xl font-bold">مرحبًا! مستعدّ للتعلّم اليوم؟</h1>
				<p className="text-sm text-gray-600">اختر دورك للمتابعة أو جرّب المنصة كزائر.</p>
			</section>
			<section aria-labelledby="roles" className="grid grid-cols-2 md:grid-cols-4 gap-3">
				<a className="rounded border p-4 hover:bg-gray-50 focus:outline-none focus:ring-2" href="/learn">طالب</a>
				<a className="rounded border p-4 hover:bg-gray-50 focus:outline-none focus:ring-2" href="/dashboard?role=guardian">وليّ أمر</a>
				<a className="rounded border p-4 hover:bg-gray-50 focus:outline-none focus:ring-2" href="/dashboard?role=educator">معلم</a>
				<a className="rounded border p-4 hover:bg-gray-50 focus:outline-none focus:ring-2" href="/dashboard?role=admin">إدارة</a>
			</section>
			<section aria-labelledby="a11y" className="grid gap-3">
				<h2 id="a11y" className="text-xl font-semibold">إمكانية الوصول</h2>
				<div className="flex flex-wrap gap-2">
					<button className="border rounded px-3 py-2" data-action="text-zoom">تكبير النص</button>
					<button className="border rounded px-3 py-2" data-action="high-contrast">تباين عالٍ</button>
					<button className="border rounded px-3 py-2" data-action="reduce-motion">إيقاف الحركة</button>
				</div>
			</section>
		</div>
	);
}