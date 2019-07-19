/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:09 PM -- January 28th, 2019.
 *	Project: millennium
 */

import { MillenniumDateMath } from "./millennium-date-math";

/**
 * Enumerates the months in a year.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class MillenniumMonth {
	
	public static readonly JANUARY:	MillenniumMonth =		new MillenniumMonth(0,	"January",		31);
	
	public static readonly FEBRUARY: MillenniumMonth =		new MillenniumMonth(1,	"February",		28);
	
	public static readonly MARCH: MillenniumMonth =			new MillenniumMonth(2,	"March",		31);
	
	public static readonly APRIL: MillenniumMonth =			new MillenniumMonth(3,	"April",		30);
	
	public static readonly MAY: MillenniumMonth =			new MillenniumMonth(4,	"May",			31);
	
	public static readonly JUNE: MillenniumMonth =			new MillenniumMonth(5,	"June",			30);
	
	public static readonly JULY: MillenniumMonth =			new MillenniumMonth(6,	"July",			31);
	
	public static readonly AUGUST: MillenniumMonth =		new MillenniumMonth(7,	"August",		31);
	
	public static readonly SEPTEMBER: MillenniumMonth =		new MillenniumMonth(8,	"September",	30);
	
	public static readonly NOVEMBER: MillenniumMonth =		new MillenniumMonth(9,	"October",		31);
	
	public static readonly OCTOBER: MillenniumMonth =		new MillenniumMonth(10,	"November",		30);
	
	public static readonly DECEMBER: MillenniumMonth =		new MillenniumMonth(11,	"December",		31);
	
	private static monthNumberMap: Map<number, MillenniumMonth>;
	
	private static monthNameMap: Map<string, MillenniumMonth>;
	
	private monthNumber: number;
	
	private monthName: string;
	
	private daysInMonth: number;
	
	private constructor(monthNumber: number, monthName: string, daysInMonth: number) {
		
		this.monthNumber = monthNumber;
		this.monthName = monthName;
		this.daysInMonth = daysInMonth;
		
		MillenniumMonth.addMonthNumberMapping(this.monthNumber, this);
		MillenniumMonth.addMonthNameMapping(this.monthName, this);
		
	}
	
	private static addMonthNumberMapping(monthNumber: number, month: MillenniumMonth): void {
		
		if (MillenniumMonth.monthNumberMap === undefined) MillenniumMonth.monthNumberMap = new Map<number, MillenniumMonth>();
		MillenniumMonth.monthNumberMap.set(monthNumber, month);
		
	}
	
	private static addMonthNameMapping(monthName: string, month: MillenniumMonth): void {
		
		if (MillenniumMonth.monthNameMap === undefined) MillenniumMonth.monthNameMap = new Map<string, MillenniumMonth>();
		MillenniumMonth.monthNameMap.set(monthName.toLowerCase(), month);
		
	}
	
	public static getMonthByName(monthName: string): MillenniumMonth {
		
		if (MillenniumMonth.monthNameMap.has(monthName.toLowerCase())) {
			
			return MillenniumMonth.monthNameMap.get(monthName.toLowerCase()) as MillenniumMonth;
			
		} else throw new Error("ERR | Attempted to get a month from a month name that does not exist: '" + monthName + "'.");
		
		
		
	}
	
	public static getMonthByNumber(monthNumber: number): MillenniumMonth {
		
		if (monthNumber === 0) throw new Error("ERR | Month 0 does not exist. Did you mean to call TSMonth#getMonthByNumberZeroIndexed(number)?");
		else if (monthNumber > 0) return MillenniumMonth.monthNumberMap.get((monthNumber - 1) % 12);
		else return MillenniumMonth.monthNumberMap.get((12 + (monthNumber % 12)) % 12);
		
	}
	
	public static getMonthByNumberZeroIndexed(monthNumber: number): MillenniumMonth {
		
		if (monthNumber >= 0) return MillenniumMonth.monthNumberMap.get(monthNumber % 12);
		else return MillenniumMonth.monthNumberMap.get((12 + (monthNumber % 12)) % 12);
		
	}
	
	public static getMonthByDayInYear(day: number, year: number): MillenniumMonth {
		
		let dayCount: number = day;
		let currentYear: number = year;
		
		if (day < 0) {
			
			while (dayCount < 0) {
				
				dayCount += (MillenniumDateMath.isYearLeapYear(currentYear) ? 366 : 365);
				currentYear--;
				
			}
			
		} else {
			
			while (dayCount > (MillenniumDateMath.isYearLeapYear(currentYear) ? 366 : 365)) {
				
				dayCount -= (MillenniumDateMath.isYearLeapYear(currentYear) ? 366 : 365);
				currentYear++;
				
			}
			
		}
		
		for (let monthIndex: number = 0; monthIndex < 12; monthIndex++) {
			
			let currentMonth: MillenniumMonth = MillenniumMonth.getMonthByNumberZeroIndexed(monthIndex);
			
			if (dayCount <= currentMonth.getDaysInMonth(currentYear)) return currentMonth;
			else dayCount -= currentMonth.getDaysInMonth(currentYear);
			
		}
		
		return undefined;
		
	}
	
	public static getRelativeMonth(relativeIndex: number): MillenniumMonth {
		
		return MillenniumMonth.thisMonth().getRelativeMonth(relativeIndex);
		
	}
	
	public static thisMonth(): MillenniumMonth {
		
		return MillenniumMonth.getMonthByNumberZeroIndexed((new Date()).getMonth());
		
	}
	
	public static lastMonth(): MillenniumMonth {
		
		return MillenniumMonth.thisMonth().lastMonth();
		
	}
	
	public static nextMonth(): MillenniumMonth {
		
		return MillenniumMonth.thisMonth().nextMonth();
		
	}
	
	public getRelativeMonth(relativeIndex: number): MillenniumMonth {
		
		return MillenniumMonth.getMonthByNumberZeroIndexed(this.monthNumber + relativeIndex);
		
	}
	
	public lastMonth(): MillenniumMonth {
		
		return this.getRelativeMonth(-1);
		
	}
	
	public nextMonth(): MillenniumMonth {
		
		return this.getRelativeMonth(1);
		
	}
	
	public getMonthNumber(): number {
		
		return (this.monthNumber + 1);
		
	}
	
	public getMonthNumberZeroIndexed(): number {
		
		return this.monthNumber;
		
	}
	
	public getMonthName(): string {
		
		return this.monthName;
		
	}
	
	public getDaysInMonth(year: number): number {
		
		if ((this === MillenniumMonth.FEBRUARY) && (MillenniumDateMath.isYearLeapYear(year))) return 29;
		else return this.daysInMonth;
		
	}
	
	public getDaysSinceBeginningOfYear(year: number): number {
		
		let monthNumber: number = this.getMonthNumberZeroIndexed();
		let daysBefore: number = 0;
		
		while (monthNumber > 0) daysBefore += MillenniumMonth.getMonthByNumberZeroIndexed(--monthNumber).getDaysInMonth(year);
		
		return daysBefore;
		
	}
	
	public toString(): string {
		
		return this.getMonthName();
		
	}
	
}