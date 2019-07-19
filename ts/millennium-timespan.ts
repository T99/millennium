/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:16 PM -- March 07th, 2019.
 *	Project: millennium
 */

import { MillenniumTimeUnit } from "./millennium-time-unit";
import { MillenniumDate } from "./millennium-date";

/**
 * A class representing a length of time.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class MillenniumTimespan {
	
	private milliseconds: number;
	
	public constructor(milliseconds: number) {
		
		this.milliseconds = milliseconds;
		
	}
	
	public static between(date1: MillenniumDate, date2: MillenniumDate): MillenniumTimespan {
		
		let oldest: number = Math.min(date1.getAdjustedEpochTime(), date2.getAdjustedEpochTime());
		let newest: number = Math.max(date1.getAdjustedEpochTime(), date2.getAdjustedEpochTime());
		
		return new MillenniumTimespan(newest - oldest);
		
	}
	
	public static since(date: MillenniumDate): MillenniumTimespan {
		
		return new MillenniumTimespan(MillenniumDate.fromNow().getAdjustedEpochTime() - date.getAdjustedEpochTime());
		
	}
	
	public static until(date: MillenniumDate): MillenniumTimespan {
		
		return new MillenniumTimespan(date.getAdjustedEpochTime() - MillenniumDate.fromNow().getAdjustedEpochTime());
		
	}
	
	public toMilliseconds(): number {
		
		return this.milliseconds;
		
	}
	
	public toSeconds(): number {
		
		return (this.milliseconds / MillenniumTimeUnit.SECOND.getMilliseconds());
		
	}
	
	public toMinutes(): number {
		
		return (this.milliseconds / MillenniumTimeUnit.MINUTE.getMilliseconds());
		
	}
	
	public toHours(): number {
		
		return (this.milliseconds / MillenniumTimeUnit.HOUR.getMilliseconds());
		
	}
	
	public toDays(): number {
		
		return (this.milliseconds / MillenniumTimeUnit.DAY.getMilliseconds());
		
	}
	
	public toWeeks(): number {
		
		return (this.milliseconds / MillenniumTimeUnit.WEEK.getMilliseconds());
		
	}
	
	public toMonths(): number {
		
		return (this.milliseconds / MillenniumTimeUnit.MONTH.getMilliseconds());
		
	}
	
	public toYears(): number {
		
		return (this.milliseconds / MillenniumTimeUnit.YEAR.getMilliseconds());
		
	}
	
	public toStringFromUnits(units: MillenniumTimeUnit[], enforceUse?: boolean): string {
		
		let sortedUnits: MillenniumTimeUnit[] = [];
		
		while (units.length !== 0) {
			
			let largestIndex: number = 0;
			
			for (let index: number = 1; index < units.length; index++) {
				
				if (units[index].getMilliseconds() > units[largestIndex].getMilliseconds()) largestIndex = index;
				
			}
			
			sortedUnits.push(units[largestIndex]);
			units.splice(largestIndex, 1);
			
		}
		
		let unitStrings: string[] = [];
		let remainingTime: number = this.milliseconds;
		
		for (let unit of sortedUnits) {
			
			let unitString: string = "";
			
			let amount: number = Math.floor(remainingTime / unit.getMilliseconds());
			
			if ((amount !== 0) || ((amount === 0) && (enforceUse === true))) {
				
				unitString += amount;
				
				unitString += " ";
				
				if (amount === 1) unitString += unit.getSingularName();
				else unitString += unit.getPluralName();
				
				remainingTime -= (amount * unit.getMilliseconds());
				
			}
			
			if (unitString !== "") unitStrings.push(unitString);
			
		}
		
		let finalResult: string = "";
		
		for (let index: number = 0; index < unitStrings.length; index++) {
			
			finalResult += unitStrings[index];
			
			if (index < unitStrings.length - 2) finalResult += ", ";
			else if (index < unitStrings.length - 1) finalResult += ", and ";
			
		}
		
		return finalResult;
		
	}
	
}