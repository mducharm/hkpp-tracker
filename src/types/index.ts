import { openDB, DBSchema } from 'idb';

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

export interface IntakeDB extends DBSchema { 
    'intake-results': {
        value: Intake,
        key: string,
        indexes: {
            
        }
    },
}