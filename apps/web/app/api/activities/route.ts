import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const kind = searchParams.get("kind");
	return NextResponse.json({ kind, items: [] });
}