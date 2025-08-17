export default function LoginPage() {
	return (
		<div className="max-w-sm mx-auto grid gap-3">
			<h1 className="text-xl font-semibold">تسجيل الدخول</h1>
			<p className="text-sm text-gray-600">سندعم البريد/OTP لاحقًا. يمكنك التجربة كزائر.</p>
			<form className="grid gap-3">
				<label className="grid gap-1">
					<span className="text-sm">البريد الإلكتروني</span>
					<input type="email" className="border rounded p-2" placeholder="you@example.com"/>
				</label>
				<button type="button" className="border rounded px-3 py-2">دخول</button>
			</form>
		</div>
	);
}