import { MillenniumMonth } from "./millennium-month";
export declare class MillenniumDate {
    private static readonly EPOCH_YEAR;
    private epochTime;
    private offsetHours;
    private constructor();
    static fromNow(): MillenniumDate;
    static fromDate(date: Date): MillenniumDate;
    static fromEpochTime(epochTime: number, offsetHours?: number): MillenniumDate;
    static fromTheBeginningOfTime(offsetHours?: number): MillenniumDate;
    isYearLeapYear(): boolean;
    getYear(): number;
    getMonth(): MillenniumMonth;
    getDayOfMonth(): number;
    getHourOfDay24HourZeroIndexed(): number;
    getHourOfDay24Hour(): number;
    getHourOfDay12Hour(): number;
    get12HourPeriod(): string;
    getMinuteOfHour(): number;
    getSecondOfMinute(): number;
    getMillisecondOfSecond(): number;
    getUTCOffset(): number;
    getEpochTime(): number;
    getAdjustedEpochTime(): number;
    toString(): string;
}
