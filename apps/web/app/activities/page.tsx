export default function ActivitiesPage() {
	return (
		<div className="grid gap-4">
			<h1 className="text-xl font-semibold">الأنشطة</h1>
			<div className="grid md:grid-cols-3 gap-3">
				<button className="border rounded p-3">Game – Matching</button>
				<button className="border rounded p-3">Game – Sequence</button>
				<button className="border rounded p-3">Quiz – 3 أسئلة</button>
			</div>
			<section className="border rounded p-3">
				<h2 className="font-semibold">لوحة رموز (AAC) – مبدئي</h2>
				<div className="flex gap-2">
					<button className="border rounded px-3 py-2">🍎 تفاحة</button>
					<button className="border rounded px-3 py-2">🚗 سيارة</button>
					<button className="border rounded px-3 py-2">🐱 قط</button>
				</div>
			</section>
		</div>
	);
}