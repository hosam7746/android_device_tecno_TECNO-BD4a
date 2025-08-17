export default function LearnPage() {
	return (
		<div className="grid gap-4">
			<h1 className="text-xl font-semibold">التعلّم</h1>
			<div className="grid md:grid-cols-3 gap-3">
				<a className="border rounded p-3" href="/activities">وحدة فيديو: حرف اليوم</a>
				<a className="border rounded p-3" href="/activities">لعبة: مطابقة</a>
				<a className="border rounded p-3" href="/activities">اختبار: 3 أسئلة</a>
			</div>
		</div>
	);
}