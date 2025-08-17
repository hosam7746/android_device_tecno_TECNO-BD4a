export type RecommendationEvent = {
    activityType?: string;
    score?: number;
    timeOnTaskSec?: number;
    completedCount?: number;
};
export type Suggestion = {
    reason: string;
    action: string;
};
export declare function evaluateRules(event: RecommendationEvent): Suggestion[];
