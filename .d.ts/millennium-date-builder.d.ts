import { BuilderBase } from "builder-base";
import { MillenniumDate } from "./millennium-date";
import { MillenniumMonth } from "./millennium-month";
export declare class MillenniumDateBuilder extends BuilderBase<MillenniumDate> {
    constructor();
    withYear(year: number): MillenniumDateBuilder;
    withMonth(month: MillenniumMonth): MillenniumDateBuilder;
    withDay(day: number): MillenniumDateBuilder;
    withDayZeroIndexed(day: number): MillenniumDateBuilder;
    withHours(hours: number): MillenniumDateBuilder;
    withMinutes(minutes: number): MillenniumDateBuilder;
    withSeconds(seconds: number): MillenniumDateBuilder;
    withMilliseconds(milliseconds: number): MillenniumDateBuilder;
    withOffset(offsetHours: number): MillenniumDateBuilder;
    build(): MillenniumDate;
}
