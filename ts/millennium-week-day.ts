/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	8:07 PM -- August 01st, 2019.
 *	Project: millennium
 */

import { MillenniumDate } from "./millennium-date";
import { MillenniumTimespan } from "./millennium-timespan";

/**
 * An enumeration of the days of the week (ex: Monday, Tuesday, etc...).
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.2.0
 * @since v0.2.0
 */
export class MillenniumWeekDay {
	
	public static readonly MONDAY: MillenniumWeekDay	= new MillenniumWeekDay("Monday");
	public static readonly TUESDAY: MillenniumWeekDay	= new MillenniumWeekDay("Tuesday");
	public static readonly WEDNESDAY: MillenniumWeekDay	= new MillenniumWeekDay("Wednesday");
	public static readonly THURSDAY: MillenniumWeekDay	= new MillenniumWeekDay("Thursday");
	public static readonly FRIDAY: MillenniumWeekDay	= new MillenniumWeekDay("Friday");
	public static readonly SATURDAY: MillenniumWeekDay	= new MillenniumWeekDay("Saturday");
	public static readonly SUNDAY: MillenniumWeekDay	= new MillenniumWeekDay("Sunday");
	
	private static DAYS_OF_WEEK: MillenniumWeekDay[];
	
	private readonly name: string;
	
	private constructor(name: string) {
		
		this.name = name;
		
		MillenniumWeekDay.addDayOfWeek(this);
		
	}
	
	private static addDayOfWeek(dayOfWeek: MillenniumWeekDay): void {
		
		if (MillenniumWeekDay.DAYS_OF_WEEK === undefined) MillenniumWeekDay.DAYS_OF_WEEK = [];
		
		MillenniumWeekDay.DAYS_OF_WEEK.push(dayOfWeek);
		
	}
	
	public static getViaName(name: string): MillenniumWeekDay | undefined {
		
		for (let day of MillenniumWeekDay.DAYS_OF_WEEK) {
			
			if (name.toLowerCase() === day.getName().toLowerCase()) return day;
			
		}
		
		dayIterator:
		for (let day of MillenniumWeekDay.DAYS_OF_WEEK) {
			
			if (name.length < day.getName().length) {
				
				let dayNameChars: string[] = day.getName().split("");
				let searchChars: string[] = name.split("");
				
				for (let cursor: number = 0; cursor < searchChars.length; cursor++) {
					
					if (dayNameChars[cursor] !== searchChars[cursor]) continue dayIterator;
					
				}
				
				return day;
				
			}
			
		}
		
		return undefined;
		
	}
	
	public static getViaIndex(index: number, startingFrom: MillenniumWeekDay = MillenniumWeekDay.SUNDAY): MillenniumWeekDay {
		
		let baseIndex: number = MillenniumWeekDay.DAYS_OF_WEEK.indexOf(startingFrom);
		let rangeLength: number = MillenniumWeekDay.DAYS_OF_WEEK.length;
		let actualIndex: number = (((baseIndex + index) % rangeLength) + rangeLength) % rangeLength;
		
		return MillenniumWeekDay.DAYS_OF_WEEK[actualIndex];
		
	}
	
	public static getViaDate(date: MillenniumDate): MillenniumWeekDay {
	
		// Find the number of days between the Unix epoch (a day known to be a Thursday).
		let daysBetween: number = Math.floor((MillenniumTimespan.between(MillenniumDate.fromTheBeginningOfTime(), date)).toDays());
		
		// Figure out the day of week via the number of days between the Unix epoch, starting from Thursday.
		let dayOfWeek: MillenniumWeekDay = MillenniumWeekDay.getViaIndex(daysBetween, MillenniumWeekDay.THURSDAY);
		
		return dayOfWeek;
	
	}
	
	public getName(): string {
		
		return this.name;
		
	}
	
}