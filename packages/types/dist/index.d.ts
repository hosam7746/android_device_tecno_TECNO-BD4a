export type DisabilityType = "intellectual" | "learning" | "asd" | "motor" | "sensory";
export interface Student {
    id: string;
    userId?: string | null;
    name: string;
    disabilityType?: DisabilityType | null;
    birthdate?: string | null;
    createdAt?: string;
}
export interface IEPPlan {
    id: string;
    studentId: string;
    title: string;
    startDate?: string | null;
    endDate?: string | null;
    createdBy?: string | null;
    createdAt?: string;
}
export type ActivityKind = "unit" | "video" | "game" | "quiz";
export interface Activity {
    id: string;
    kind: ActivityKind;
    title: string;
    payload?: unknown;
    a11y?: unknown;
    createdBy?: string | null;
    createdAt?: string;
}
export interface Assignment {
    id: string;
    studentId: string;
    activityId: string | null;
    dueAt?: string | null;
    status?: string;
}
export interface ProgressLog {
    id: string;
    studentId: string;
    activityId?: string | null;
    score?: number | null;
    accuracy?: number | null;
    timeOnTask?: number | null;
    notes?: string | null;
    createdAt?: string;
}
