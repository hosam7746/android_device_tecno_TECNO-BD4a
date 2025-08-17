import { NextResponse } from "next/server";

export async function GET() {
	// TODO: fetch from Supabase
	return NextResponse.json({ students: [] });
}

export async function POST(req: Request) {
	const body = await req.json().catch(() => ({}));
	// TODO: insert into Supabase
	return NextResponse.json({ created: body }, { status: 201 });
}