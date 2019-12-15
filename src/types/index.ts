export interface Intake {
    severity: number;
    duration: number;
    occuranceDate: Date;
    triggers: string[];
    notes: string;
}

export const triggers = [
    "Cold temperature",
    "Irregular sleep",
    "Stress",
    "Missing medicine dose",
    "Excessive potassium",
    "Overexertion"
]
