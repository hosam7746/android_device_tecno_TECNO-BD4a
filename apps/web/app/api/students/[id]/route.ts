import { NextResponse } from "next/server";

type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
	const { id } = params;
	// TODO: fetch from Supabase
	return NextResponse.json({ id, name: "طالب تجريبي" });
}