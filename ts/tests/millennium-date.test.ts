/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:50 PM -- July 30th, 2019.
 *	Project: millennium
 */

import { MillenniumDate } from "../millennium-date";
import { MillenniumDateBuilder } from "../millennium-date-builder";
import { MillenniumMonth } from "../millennium-month";

/**
 * Test cases for the {@link MillenniumDate} class.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.2.0
 * @since v0.2.0
 */

describe("Initialization", () => {
	
	test("Initialization at current time.", () => {
	
		let date: MillenniumDate = MillenniumDate.fromNow();
		
		console.log("12 Hour Representation: " + date.toString());
		console.log("24 Hour Representation: " + date.toString(true));
	
	});
	
	test("Initialization at the 'beginning of time'.", () => {
		
		let date: MillenniumDate = MillenniumDate.fromTheBeginningOfTime(0);
		
		console.log("12 Hour Representation: " + date.toString());
		console.log("24 Hour Representation: " + date.toString(true));
		
	});
	
});

describe("Per-method tests.", () => {
	
	type TestData = {
		
		dateName: string,
		date: MillenniumDate
		
	};
	
	let testData: TestData[] = [
		{
			dateName: "Original testing date",
			date: (new MillenniumDateBuilder())
					.withYear(2019)
					.withMonth(MillenniumMonth.JULY)
					.withDay(31)
					.withHours(23)
					.withMinutes(45)
					.build()
		},
		{
			dateName: "Beginning of time",
			date: MillenniumDate.fromTheBeginningOfTime()
		},
		{
			dateName: "From leap day on leap year",
			date: (new MillenniumDateBuilder())
					.withYear(2016)
					.withMonth(MillenniumMonth.FEBRUARY)
					.withDay(29)
					.withHours(14)
					.withMinutes(11)
					.withSeconds(47)
					.withMilliseconds(859)
					.build()
		}
	];
	
	testData;
	
	for (let data of testData) {
		
		describe("For: '" + data.dateName + "'.", () => {
			
			describe("#isYearLeapYear", () => {
			
			
			
			});
			
			describe("#getYear", () => {
			
			
			
			});
			
			describe("#getMonth", () => {
			
			
			
			});
			
			describe("#getDayOfMonth", () => {
			
			
			
			});
			
			describe("", () => {
			
			
			
			});
		
		});
		
	}
	
});

// class TestData {
//
// 	public readonly isLeapYear: boolean;
//
// 	public readonly year: number;
//
// 	public readonly month: number;
//
// 	public readonly day: number;
//
// 	public readonly hour: number;
//
// 	public readonly minute: number;
//
// 	public readonly second: number;
//
// 	public readonly millisecond: number;
//
// 	public constructor({
// 		isLeapYear?: boolean,
// 		year?: number,
// 		month?: number,
// 		day?: number,
// 		hour?: number,
// 		minute?: number,
// 		second?: number,
// 		millisecond?: number
// 	}) {
//
//
//
// 	}
//
// }