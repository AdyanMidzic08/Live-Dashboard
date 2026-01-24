import fs, { readFileSync } from 'fs';
import path from 'path';
import type { Habit } from '../Interfaces/interface-habit';

const HABIT_FILE_PATH = path.join(process.cwd(), 'habits.json');

function ensureDataFile() {
    if(!fs.existsSync(HABIT_FILE_PATH)) {
        fs.writeFileSync(HABIT_FILE_PATH, "[]", "utf-8")
    }
}

export function readHabits(): Habit[] {
    ensureDataFile();

    let habits = readFileSync(HABIT_FILE_PATH, "utf-8");

    return JSON.parse(habits);
}

export function writeHabits(habits: Habit[]) {
    fs.writeFileSync(HABIT_FILE_PATH, JSON.stringify(habits, null, 2));
}