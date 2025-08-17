import { NextResponse } from "next/server";
import { evaluateRules } from "@ibtikar/recommendation";

type Event = {
	activityType?: string;
	score?: number;
	timeOnTaskSec?: number;
	completedCount?: number;
};

export async function POST(req: Request) {
	const event: Event = await req.json().catch(() => ({} as Event));
	const suggestions = evaluateRules(event);
	return NextResponse.json({ suggestions });
}