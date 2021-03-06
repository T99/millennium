/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:00 PM -- January 28th, 2019.
 *	Project: millennium
 */

import { MillenniumMonth } from "./millennium-month";
import { MillenniumDateMath } from "./millennium-date-math";
import { MillenniumTimespan } from "./millennium-timespan";
import { MillenniumDateBuilder } from "./millennium-date-builder";
import { MillenniumTimeUnit } from "./millennium-time-unit";
import { MillenniumWeekDay } from "./millennium-week-day";

/**
 * The main Millennium class that holds date information.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class MillenniumDate {
	
	private static readonly EPOCH_YEAR: number = 1970;
	
	private epochTime: number;
	
	private offsetHours: number;
	
	private constructor(epochTime: number, offsetHours?: number) {
		
		this.epochTime = epochTime;
		this.offsetHours = (offsetHours !== undefined ? offsetHours : 0);
		
	}
	
	public static fromNow(offsetHours?: number): MillenniumDate {
		
		let now: Date = new Date();
		
		if (offsetHours !== undefined) return new MillenniumDate(now.getTime(), offsetHours);
		else return new MillenniumDate(now.getTime(), (-now.getTimezoneOffset() / 60));
		
	}
	
	public static fromDate(date: Date, offsetHours?: number): MillenniumDate {
		
		if (offsetHours !== undefined) return new MillenniumDate(date.getTime(), offsetHours);
		else return new MillenniumDate(date.getTime(), (-date.getTimezoneOffset() / 60));
		
	}
	
	public static fromEpochTime(epochTime: number, offsetHours?: number): MillenniumDate {
		
		return new MillenniumDate(epochTime, offsetHours);
		
	}
	
	public static fromTheBeginningOfTime(offsetHours?: number): MillenniumDate {
		
		return new MillenniumDate(0, offsetHours);
		
	}
	
	public isYearLeapYear(): boolean {
		
		return MillenniumDateMath.isYearLeapYear(this.getYear());
		
	}
	
	public getYear(): number {
		
		let millisecondApproximation: number = this.getAdjustedEpochTime();
		let yearApproximation: number = (MillenniumDate.EPOCH_YEAR + (millisecondApproximation / MillenniumTimeUnit.YEAR.getMilliseconds()));
		let leapYearBeingInspected: number;
		
		if (this.getAdjustedEpochTime() >= 0) {
			
			leapYearBeingInspected = 1972;
			
			while (leapYearBeingInspected < Math.floor(yearApproximation)) {
				
				if (MillenniumDateMath.isYearLeapYear(leapYearBeingInspected)) {
					
					millisecondApproximation -= MillenniumTimeUnit.DAY.getMilliseconds();
					yearApproximation = (MillenniumDate.EPOCH_YEAR + (millisecondApproximation / MillenniumTimeUnit.YEAR.getMilliseconds()));
					
				}
				
				leapYearBeingInspected += 4;
				
			}
			
		} else {
			
			leapYearBeingInspected = 1968;
			
			while (leapYearBeingInspected > yearApproximation) {
				
				if (MillenniumDateMath.isYearLeapYear(leapYearBeingInspected)) {
					
					millisecondApproximation += MillenniumTimeUnit.DAY.getMilliseconds();
					yearApproximation = (MillenniumDate.EPOCH_YEAR + (millisecondApproximation / MillenniumTimeUnit.YEAR.getMilliseconds()));
					
				}
				
				leapYearBeingInspected -= 4;
				
			}
			
		}
		
		return Math.floor(yearApproximation);
		
	}
	
	public getMonth(): MillenniumMonth {
		
		let year: number = this.getYear();
		let beginningOfYear: MillenniumDate = (new MillenniumDateBuilder()).withYear(year).build();
		let dayInYear: number = MillenniumTimespan.between(beginningOfYear, this).toDays();
		
		return MillenniumMonth.getMonthByDayInYear(dayInYear, year) as MillenniumMonth;
		
	}
	
	public getDayOfMonth(): number {
		
		let beginningOfMonth: MillenniumDate =
			(new MillenniumDateBuilder())
				.withYear(this.getYear())
				.withMonth(this.getMonth())
				.build();
		
		return (Math.floor(MillenniumTimespan.between(beginningOfMonth, this).toDays()) + 1);
		
	}
	
	public getHourOfDay24Hour(zeroIndexed: boolean = false): number {
		
		let beginningOfDay: MillenniumDate =
			(new MillenniumDateBuilder())
			.withYear(this.getYear())
			.withMonth(this.getMonth())
			.withDay(this.getDayOfMonth())
			.build();
		
		// Return the rounded-down result of the amount of time between the beginning of the day and this MillenniumDate.
		let zeroIndexedResult: number = Math.floor(MillenniumTimespan.between(beginningOfDay, this).toHours());
		
		// If the zero-indexed result is desired, return it, otherwise calculate the one-indexed result.
		if (zeroIndexed) return zeroIndexedResult;
		else {
			
			//
			if (zeroIndexedResult === 0) return 12;
			else return zeroIndexedResult + 1;
			
		}
		
	}
	
	public getHourOfDay12Hour(): number {
		
		return (this.getHourOfDay24Hour() % 13);
		
	}
	
	public get12HourPeriod(): string {
		
		return (this.getHourOfDay24Hour(true) > 12 ? "PM" : "AM");
		
	}
	
	public getMinuteOfHour(): number {
		
		let beginningOfHour: MillenniumDate =
			(new MillenniumDateBuilder())
			.withYear(this.getYear())
			.withMonth(this.getMonth())
			.withDay(this.getDayOfMonth())
			.withHours(this.getHourOfDay24Hour(true))
			.build();
		
		return (Math.floor(MillenniumTimespan.between(beginningOfHour, this).toMinutes()));
		
	}
	
	public getSecondOfMinute(): number {
		
		let beginningOfMinute: MillenniumDate =
			(new MillenniumDateBuilder())
			.withYear(this.getYear())
			.withMonth(this.getMonth())
			.withDay(this.getDayOfMonth())
			.withHours(this.getHourOfDay24Hour(true))
			.withMinutes(this.getMinuteOfHour())
			.build();
		
		return (Math.floor(MillenniumTimespan.between(beginningOfMinute, this).toSeconds()));
		
	}
	
	public getMillisecondOfSecond(): number {
		
		let beginningOfSecond: MillenniumDate =
			(new MillenniumDateBuilder())
			.withYear(this.getYear())
			.withMonth(this.getMonth())
			.withDay(this.getDayOfMonth())
			.withHours(this.getHourOfDay24Hour(true))
			.withMinutes(this.getMinuteOfHour())
			.withSeconds(this.getSecondOfMinute())
			.build();
		
		return (Math.floor(MillenniumTimespan.between(beginningOfSecond, this).toMilliseconds()));
		
	}
	
	public getUTCOffset(): number {
		
		return this.offsetHours;
		
	}
	
	public getEpochTime(): number {
		
		return this.epochTime;
		
	}
	
	public getAdjustedEpochTime(): number {
		
		return (this.getEpochTime() + (this.getUTCOffset() * MillenniumTimeUnit.HOUR.getMilliseconds()));
		
	}
	
	public toString(prefer24Hour: boolean = false): string {
		
		let dayOfWeek: string = MillenniumWeekDay.getViaDate(this).getName();
		let month: string = this.getMonth().getMonthName();
		let day: number = this.getDayOfMonth();
		let ordinalIndicator: string = MillenniumDateMath.getOrdinalIndicator(day);
		let year: number = this.getYear();
		let utcString: string = "(UTC" + (this.getUTCOffset() >= 0 ? "+" : "") + this.getUTCOffset() + ")";
		let hour: string = (prefer24Hour ? this.getHourOfDay24Hour().toString() : this.getHourOfDay12Hour().toString());
		let minute: string = this.getMinuteOfHour().toString();
		let second: string = this.getSecondOfMinute().toString();
		let millisecond: string = this.getMillisecondOfSecond().toString();
		let period: string = this.get12HourPeriod();
		
		while (minute.length < 2) minute = "0" + minute;
		while (second.length < 2) second = "0" + second;
		while (millisecond.length < 3) millisecond = "0" + millisecond;
		
		return (
			dayOfWeek + ", " + month + " " + day + ordinalIndicator + ", " + year + " " +
			utcString + " " + hour + ":" + minute + ":" + second + "." + millisecond + " " + period
		);
		
	}
	
}