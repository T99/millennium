import { MillenniumMonth } from "./millennium-month";
export declare class MillenniumDate {
    private static readonly EPOCH_YEAR;
    private epochTime;
    private offsetHours;
    private constructor();
    static fromNow(offsetHours?: number): MillenniumDate;
    static fromDate(date: Date, offsetHours?: number): MillenniumDate;
    static fromEpochTime(epochTime: number, offsetHours?: number): MillenniumDate;
    static fromTheBeginningOfTime(offsetHours?: number): MillenniumDate;
    isYearLeapYear(): boolean;
    getYear(): number;
    getMonth(): MillenniumMonth;
    getDayOfMonth(): number;
    getHourOfDay24Hour(zeroIndexed?: boolean): number;
    getHourOfDay12Hour(): number;
    get12HourPeriod(): string;
    getMinuteOfHour(): number;
    getSecondOfMinute(): number;
    getMillisecondOfSecond(): number;
    getUTCOffset(): number;
    getEpochTime(): number;
    getAdjustedEpochTime(): number;
    toString(prefer24Hour?: boolean): string;
}
