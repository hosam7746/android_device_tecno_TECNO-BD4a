export function evaluateRules(event) {
    const suggestions = [];
    if (event.activityType === "matching" && (event.score ?? 100) < 60) {
        suggestions.push({ reason: "دقّة أقل من 60% في مطابقة", action: "مطابقة مبسّطة" });
    }
    if ((event.timeOnTaskSec ?? 0) > 300 && (event.completedCount ?? 0) === 0) {
        suggestions.push({ reason: "وقت طويل بدون إنجاز", action: "استراحة حسّية قصيرة" });
    }
    if ((event.completedCount ?? 0) >= 3 && (event.score ?? 0) >= 85) {
        suggestions.push({ reason: "إنجاز 3 مهام بدقة ≥ 85%", action: "شارة وتشجيع صوتي" });
    }
    return suggestions;
}
