import { MillenniumDate } from "./millennium-date";
export declare class MillenniumWeekDay {
    static readonly MONDAY: MillenniumWeekDay;
    static readonly TUESDAY: MillenniumWeekDay;
    static readonly WEDNESDAY: MillenniumWeekDay;
    static readonly THURSDAY: MillenniumWeekDay;
    static readonly FRIDAY: MillenniumWeekDay;
    static readonly SATURDAY: MillenniumWeekDay;
    static readonly SUNDAY: MillenniumWeekDay;
    private static DAYS_OF_WEEK;
    private readonly name;
    private constructor();
    private static addDayOfWeek;
    static getViaName(name: string): MillenniumWeekDay | undefined;
    static getViaIndex(index: number, startingFrom?: MillenniumWeekDay): MillenniumWeekDay;
    static getViaDate(date: MillenniumDate): MillenniumWeekDay;
    getName(): string;
}
