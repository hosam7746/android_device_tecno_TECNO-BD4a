"use client";

import { useEffect, useState } from "react";

export function A11yToolbar() {
	const [scale, setScale] = useState(1);
	const [highContrast, setHighContrast] = useState(false);
	const [reduceMotion, setReduceMotion] = useState(false);

	useEffect(() => {
		document.documentElement.style.setProperty("--tw-scale-x", String(scale));
		document.documentElement.style.setProperty("--tw-scale-y", String(scale));
		document.body.style.fontSize = `${scale}rem`;
	}, [scale]);

	useEffect(() => {
		document.documentElement.classList.toggle("hc", highContrast);
	}, [highContrast]);

	useEffect(() => {
		document.documentElement.style.setProperty("prefers-reduced-motion", reduceMotion ? "reduce" : "no-preference");
	}, [reduceMotion]);

	return (
		<div className="fixed bottom-3 left-3 flex gap-2 bg-white/80 backdrop-blur border rounded p-2 text-sm" role="toolbar" aria-label="أدوات الوصول">
			<button onClick={() => setScale((s) => Math.min(1.5, s + 0.1))} className="border rounded px-2">A+</button>
			<button onClick={() => setScale((s) => Math.max(0.9, s - 0.1))} className="border rounded px-2">A-</button>
			<label className="flex items-center gap-1">
				<input type="checkbox" checked={highContrast} onChange={(e) => setHighContrast(e.target.checked)} /> تباين عالٍ
			</label>
			<label className="flex items-center gap-1">
				<input type="checkbox" checked={reduceMotion} onChange={(e) => setReduceMotion(e.target.checked)} /> إيقاف الحركة
			</label>
		</div>
	);
}