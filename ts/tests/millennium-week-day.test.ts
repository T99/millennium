/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:33 PM -- August 01st, 2019.
 *	Project: millennium
 */

import { MillenniumWeekDay } from "../millennium-week-day";
import { MillenniumDate } from "../millennium-date";
import { MillenniumDateBuilder } from "../millennium-date-builder";
import { MillenniumMonth } from "../millennium-month";

/**
 * Test cases for the {@link MillenniumWeekDay} class.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

describe("Get day of week via #getViaName.", () => {

	test("Via full uppercase weekday names.", () => {
		
		for (let name of ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]) {
			
			let result: any = MillenniumWeekDay.getViaName(name);
			
			expect(result).toBeDefined();
			expect(result).toBeInstanceOf(MillenniumWeekDay);
			
		}
		
	});
	
	test("Via full lowercase weekday names.", () => {
		
		for (let name of ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]) {
			
			let result: any = MillenniumWeekDay.getViaName(name);
			
			expect(result).toBeDefined();
			expect(result).toBeInstanceOf(MillenniumWeekDay);
			
		}
		
	});
	
	test("Via 'proper case' weekday names.", () => {
		
		for (let name of ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]) {
			
			let result: any = MillenniumWeekDay.getViaName(name);
			
			expect(result).toBeDefined();
			expect(result).toBeInstanceOf(MillenniumWeekDay);
			
		}
		
	});
	
	describe("Partial day names should return results if they are unambiguous.", () => {
	
		test("Tests are yet unwritten...", () => {
			
			fail("Test not yet written...");
			
		});
	
	});

});

describe("Get day of week via #getViaIndex.", () => {
	
	describe("Tests indexed from the various different days of the week.", () => {
		
		describe("Indexed from Sunday (via implicit argument value).", () => {
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(1)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(2)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(3)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(4)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(5)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(6)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
		});
		
		describe("Indexed from Sunday (via explicit argument value).", () => {
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(1, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(2, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(3, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(4, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(5, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(6, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
		});
		
		describe("Indexed from Monday.", () => {
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(1, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(2, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(3, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(4, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(5, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(6, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
		});
		
		describe("Indexed from Tuesday.", () => {
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(1, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(2, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(3, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(4, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(5, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(6, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
		});
		
		describe("Indexed from Wednesday.", () => {
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(1, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(2, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(3, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(4, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(5, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(6, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
		});
		
		describe("Indexed from Thursday.", () => {
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(1, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(2, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(3, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(4, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(5, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(6, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
		});
		
		describe("Indexed from Friday.", () => {
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(1, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(2, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(3, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(4, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(5, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(6, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
		});
		
		describe("Indexed from Saturday.", () => {
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(1, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(2, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(3, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(4, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(5, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(6, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
		});
		
	});
	
	describe("Larger-than-week indexing should wrap.", () => {
		
		describe("Indexed from Sunday (via implicit argument value).", () => {
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(7)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(8)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(9)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(10)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(11)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(12)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(13)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
		});
		
		describe("Indexed from Sunday (via explicit argument value).", () => {
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(7, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(8, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(9, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(10, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(11, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(12, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(13, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
		});
		
		describe("Indexed from Monday.", () => {
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(7, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(8, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(9, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(10, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(11, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(12, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(13, MillenniumWeekDay.MONDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
		});
		
		describe("Indexed from Tuesday.", () => {
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(7, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(8, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(9, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(10, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(11, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(12, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(13, MillenniumWeekDay.TUESDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
		});
		
		describe("Indexed from Wednesday.", () => {
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(7, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(8, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(9, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(10, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(11, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(12, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(13, MillenniumWeekDay.WEDNESDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
		});
		
		describe("Indexed from Thursday.", () => {
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(7, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(8, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(9, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(10, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(11, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(12, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(13, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
		});
		
		describe("Indexed from Friday.", () => {
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(7, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(8, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(9, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(10, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(11, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(12, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(13, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
		});
		
		describe("Indexed from Saturday.", () => {
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(7, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(8, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(9, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(10, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(11, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(12, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(13, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
		});
		
	});
	
	describe("Less-than-zero indexing should wrap.", () => {
		
		describe("Indexed from Sunday (via implicit argument value).", () => {
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-1)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-2)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-3)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-4)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-5)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-6)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
		});
		
		describe("Indexed from Sunday (via explicit argument value).", () => {
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-1, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-2, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-3, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-4, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-5, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-6, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
		});
		
		describe("Indexed from Saturday.", () => {
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-1, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-2, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-3, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-4, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-5, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-6, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
		});
		
		describe("Indexed from Friday.", () => {
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-1, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-2, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-3, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-4, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-5, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-6, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
		});
		
		describe("Indexed from Thursday.", () => {
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-1, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-2, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-3, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-4, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-5, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-6, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
		});
		
		describe("Indexed from Thursday.", () => {
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-1, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-2, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-3, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-4, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-5, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-6, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
		});
		
		describe("Indexed from Friday.", () => {
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-1, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-2, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-3, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-4, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-5, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-6, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
		});
		
		describe("Indexed from Saturday.", () => {
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(0, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-1, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-2, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-3, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-4, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-5, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-6, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
		});
		
	});
	
	describe("Less-than-zero indexing should wrap (further negative).", () => {
		
		describe("Indexed from Sunday (via implicit argument value).", () => {
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-7)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-8)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-9)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-10)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-11)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-12)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-13)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
		});
		
		describe("Indexed from Sunday (via explicit argument value).", () => {
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-7, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-8, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-9, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-10, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-11, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-12, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-13, MillenniumWeekDay.SUNDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
		});
		
		describe("Indexed from Saturday.", () => {
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-7, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-8, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-9, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-10, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-11, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-12, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-13, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
		});
		
		describe("Indexed from Friday.", () => {
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-7, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-8, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-9, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-10, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-11, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-12, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-13, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
		});
		
		describe("Indexed from Thursday.", () => {
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-7, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-8, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-9, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-10, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-11, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-12, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-13, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
		});
		
		describe("Indexed from Thursday.", () => {
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-7, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-8, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-9, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-10, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-11, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-12, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-13, MillenniumWeekDay.THURSDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
		});
		
		describe("Indexed from Friday.", () => {
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-7, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-8, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-9, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-10, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-11, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-12, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-13, MillenniumWeekDay.FRIDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
		});
		
		describe("Indexed from Saturday.", () => {
			
			test("Get Saturday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-7, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SATURDAY);
				
			});
			
			test("Get Friday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-8, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.FRIDAY);
				
			});
			
			test("Get Thursday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-9, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.THURSDAY);
				
			});
			
			test("Get Wednesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-10, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.WEDNESDAY);
				
			});
			
			test("Get Tuesday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-11, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.TUESDAY);
				
			});
			
			test("Get Monday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-12, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.MONDAY);
				
			});
			
			test("Get Sunday", () => {
				
				expect(MillenniumWeekDay.getViaIndex(-13, MillenniumWeekDay.SATURDAY)).toBe(MillenniumWeekDay.SUNDAY);
				
			});
			
		});
		
	});
	
});

describe("Get day of week via #getViaDate.", () => {
	
	test("The day Archduke Franz Ferdinand was assassinated was a Sunday.", () => {
		
		let date: MillenniumDate =
			(new MillenniumDateBuilder())
				.withYear(1914)
				.withMonth(MillenniumMonth.JUNE)
				.withDay(28)
				.build();
		
		expect(MillenniumWeekDay.getViaDate(date)).toBe(MillenniumWeekDay.SUNDAY);
		
	});
	
	test("The Unix epoch should be a Thursday.", () => {
		
		expect(MillenniumWeekDay.getViaDate(MillenniumDate.fromTheBeginningOfTime())).toBe(MillenniumWeekDay.THURSDAY);
		
	});
	
	test("The turn of the century should be a Saturday.", () => {
		
		expect(MillenniumWeekDay.getViaDate(
			(new MillenniumDateBuilder()).withYear(2000).build()
		)).toBe(MillenniumWeekDay.SATURDAY);
		
	});
	
	test("The date that this test is being written should be a Monday.", () => {
		
		expect(MillenniumWeekDay.getViaDate(
			(new MillenniumDateBuilder())
				.withYear(2019)
				.withMonth(MillenniumMonth.AUGUST)
				.withDay(5)
				.build()
		)).toBe(MillenniumWeekDay.MONDAY);
		
	});
	
});