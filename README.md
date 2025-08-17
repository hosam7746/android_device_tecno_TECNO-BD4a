# منصة ابتكار – Ibtikar Platform (MVP)

مستودع أحادي يحتوي على تطبيق الويب (Next.js) وحزم مشتركة وخدمة توصيات مبدئية، مع مهاجرات Supabase.

## المتطلبات
- Node.js 18+ (مُفضّل 20)
- حساب Supabase (URL + anon key)

## الإعداد السريع
1) تثبيت الاعتماديات:
```bash
npm install
```
2) إعداد المتغيّرات:
انسخ `.env.example` إلى `.env` وحدّث القيم.
3) تشغيل بيئة التطوير:
```bash
npm run dev
```
4) بناء الإصدار الإنتاجي:
```bash
npm run build
npm run start
```

## البنية
- `apps/web`: تطبيق Next.js (App Router، Tailwind)
- `packages/types`: أنواع مشتركة (TypeScript)
- `packages/utils`: أدوات مساعدة
- `packages/ui`: مكوّنات واجهة بسيطة
- `services/recommendation`: محرّك توصيات Rule-based مبدئي
- `supabase/migrations`: جداول وRLS

## النشر
- Netlify (اختياري). راجع `netlify.toml`.

## الملاحظات
- هذا هيكل MVP قابل للتوسّع. ربط Supabase فعليًا يتطلب تهيئة الجداول وتفعيل RLS.
