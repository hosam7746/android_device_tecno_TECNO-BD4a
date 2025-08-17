type Props = { params: { id: string } };

export default async function StudentPage({ params }: Props) {
	const { id } = params;
	return (
		<div className="grid gap-4">
			<h1 className="text-xl font-semibold">ملف الطالب</h1>
			<div className="grid md:grid-cols-2 gap-4">
				<section className="border rounded p-3">
					<h2 className="font-semibold">البيانات الأساسية</h2>
					<ul className="text-sm text-gray-700 list-disc pr-5">
						<li>المعرف: {id}</li>
						<li>نوع الإعاقة: —</li>
						<li>الخطة IEP: —</li>
					</ul>
				</section>
				<section className="border rounded p-3">
					<h2 className="font-semibold">نشاط اليوم</h2>
					<p className="text-sm text-gray-700">—</p>
				</section>
			</div>
		</div>
	);
}