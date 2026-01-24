export interface Habit {
    id: string;
    name: string;
    category: string;
    streak: number;
    progress: boolean[];
}