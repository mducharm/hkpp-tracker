import { openDB, deleteDB, wrap, unwrap } from 'idb';
import { IntakeDB } from '@/types';

export async function doDataStuff() {
    const db = await openDB<IntakeDB>("hkpp-db", 1);
}