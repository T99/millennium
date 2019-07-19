import { MillenniumTimeUnit } from "./millennium-time-unit";
import { MillenniumDate } from "./millennium-date";
export declare class MillenniumTimespan {
    private milliseconds;
    constructor(milliseconds: number);
    static between(date1: MillenniumDate, date2: MillenniumDate): MillenniumTimespan;
    static since(date: MillenniumDate): MillenniumTimespan;
    static until(date: MillenniumDate): MillenniumTimespan;
    toMilliseconds(): number;
    toSeconds(): number;
    toMinutes(): number;
    toHours(): number;
    toDays(): number;
    toWeeks(): number;
    toMonths(): number;
    toYears(): number;
    toStringFromUnits(units: MillenniumTimeUnit[], enforceUse?: boolean): string;
}
