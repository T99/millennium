"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const millennium_week_day_1 = require("../millennium-week-day");
const millennium_date_1 = require("../millennium-date");
const millennium_date_builder_1 = require("../millennium-date-builder");
const millennium_month_1 = require("../millennium-month");
describe("Get day of week via #getViaName.", () => {
    test("Via full uppercase weekday names.", () => {
        for (let name of ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]) {
            let result = millennium_week_day_1.MillenniumWeekDay.getViaName(name);
            expect(result).toBeDefined();
            expect(result).toBeInstanceOf(millennium_week_day_1.MillenniumWeekDay);
        }
    });
    test("Via full lowercase weekday names.", () => {
        for (let name of ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]) {
            let result = millennium_week_day_1.MillenniumWeekDay.getViaName(name);
            expect(result).toBeDefined();
            expect(result).toBeInstanceOf(millennium_week_day_1.MillenniumWeekDay);
        }
    });
    test("Via 'proper case' weekday names.", () => {
        for (let name of ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]) {
            let result = millennium_week_day_1.MillenniumWeekDay.getViaName(name);
            expect(result).toBeDefined();
            expect(result).toBeInstanceOf(millennium_week_day_1.MillenniumWeekDay);
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
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(1)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(2)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(3)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(4)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(5)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(6)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
        });
        describe("Indexed from Sunday (via explicit argument value).", () => {
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(1, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(2, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(3, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(4, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(5, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(6, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
        });
        describe("Indexed from Monday.", () => {
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(1, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(2, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(3, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(4, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(5, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(6, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
        });
        describe("Indexed from Tuesday.", () => {
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(1, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(2, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(3, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(4, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(5, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(6, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
        });
        describe("Indexed from Wednesday.", () => {
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(1, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(2, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(3, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(4, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(5, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(6, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
        });
        describe("Indexed from Thursday.", () => {
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(1, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(2, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(3, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(4, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(5, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(6, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
        });
        describe("Indexed from Friday.", () => {
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(1, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(2, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(3, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(4, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(5, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(6, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
        });
        describe("Indexed from Saturday.", () => {
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(1, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(2, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(3, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(4, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(5, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(6, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
        });
    });
    describe("Larger-than-week indexing should wrap.", () => {
        describe("Indexed from Sunday (via implicit argument value).", () => {
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(7)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(8)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(9)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(10)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(11)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(12)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(13)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
        });
        describe("Indexed from Sunday (via explicit argument value).", () => {
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(7, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(8, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(9, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(10, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(11, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(12, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(13, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
        });
        describe("Indexed from Monday.", () => {
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(7, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(8, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(9, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(10, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(11, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(12, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(13, millennium_week_day_1.MillenniumWeekDay.MONDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
        });
        describe("Indexed from Tuesday.", () => {
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(7, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(8, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(9, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(10, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(11, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(12, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(13, millennium_week_day_1.MillenniumWeekDay.TUESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
        });
        describe("Indexed from Wednesday.", () => {
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(7, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(8, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(9, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(10, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(11, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(12, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(13, millennium_week_day_1.MillenniumWeekDay.WEDNESDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
        });
        describe("Indexed from Thursday.", () => {
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(7, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(8, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(9, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(10, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(11, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(12, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(13, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
        });
        describe("Indexed from Friday.", () => {
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(7, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(8, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(9, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(10, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(11, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(12, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(13, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
        });
        describe("Indexed from Saturday.", () => {
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(7, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(8, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(9, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(10, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(11, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(12, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(13, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
        });
    });
    describe("Less-than-zero indexing should wrap.", () => {
        describe("Indexed from Sunday (via implicit argument value).", () => {
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-1)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-2)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-3)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-4)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-5)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-6)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
        });
        describe("Indexed from Sunday (via explicit argument value).", () => {
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-1, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-2, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-3, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-4, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-5, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-6, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
        });
        describe("Indexed from Saturday.", () => {
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-1, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-2, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-3, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-4, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-5, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-6, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
        });
        describe("Indexed from Friday.", () => {
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-1, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-2, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-3, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-4, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-5, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-6, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
        });
        describe("Indexed from Thursday.", () => {
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-1, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-2, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-3, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-4, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-5, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-6, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
        });
        describe("Indexed from Thursday.", () => {
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-1, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-2, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-3, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-4, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-5, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-6, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
        });
        describe("Indexed from Friday.", () => {
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-1, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-2, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-3, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-4, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-5, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-6, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
        });
        describe("Indexed from Saturday.", () => {
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(0, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-1, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-2, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-3, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-4, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-5, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-6, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
        });
    });
    describe("Less-than-zero indexing should wrap (further negative).", () => {
        describe("Indexed from Sunday (via implicit argument value).", () => {
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-7)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-8)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-9)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-10)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-11)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-12)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-13)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
        });
        describe("Indexed from Sunday (via explicit argument value).", () => {
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-7, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-8, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-9, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-10, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-11, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-12, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-13, millennium_week_day_1.MillenniumWeekDay.SUNDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
        });
        describe("Indexed from Saturday.", () => {
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-7, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-8, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-9, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-10, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-11, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-12, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-13, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
        });
        describe("Indexed from Friday.", () => {
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-7, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-8, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-9, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-10, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-11, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-12, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-13, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
        });
        describe("Indexed from Thursday.", () => {
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-7, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-8, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-9, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-10, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-11, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-12, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-13, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
        });
        describe("Indexed from Thursday.", () => {
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-7, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-8, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-9, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-10, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-11, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-12, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-13, millennium_week_day_1.MillenniumWeekDay.THURSDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
        });
        describe("Indexed from Friday.", () => {
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-7, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-8, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-9, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-10, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-11, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-12, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-13, millennium_week_day_1.MillenniumWeekDay.FRIDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
        });
        describe("Indexed from Saturday.", () => {
            test("Get Saturday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-7, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
            });
            test("Get Friday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-8, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.FRIDAY);
            });
            test("Get Thursday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-9, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
            });
            test("Get Wednesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-10, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.WEDNESDAY);
            });
            test("Get Tuesday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-11, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.TUESDAY);
            });
            test("Get Monday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-12, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
            });
            test("Get Sunday", () => {
                expect(millennium_week_day_1.MillenniumWeekDay.getViaIndex(-13, millennium_week_day_1.MillenniumWeekDay.SATURDAY)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
            });
        });
    });
});
describe("Get day of week via #getViaDate.", () => {
    test("The day Archduke Franz Ferdinand was assassinated was a Sunday.", () => {
        let date = (new millennium_date_builder_1.MillenniumDateBuilder())
            .withYear(1914)
            .withMonth(millennium_month_1.MillenniumMonth.JUNE)
            .withDay(28)
            .build();
        expect(millennium_week_day_1.MillenniumWeekDay.getViaDate(date)).toBe(millennium_week_day_1.MillenniumWeekDay.SUNDAY);
    });
    test("The Unix epoch should be a Thursday.", () => {
        expect(millennium_week_day_1.MillenniumWeekDay.getViaDate(millennium_date_1.MillenniumDate.fromTheBeginningOfTime())).toBe(millennium_week_day_1.MillenniumWeekDay.THURSDAY);
    });
    test("The turn of the century should be a Saturday.", () => {
        expect(millennium_week_day_1.MillenniumWeekDay.getViaDate((new millennium_date_builder_1.MillenniumDateBuilder()).withYear(2000).build())).toBe(millennium_week_day_1.MillenniumWeekDay.SATURDAY);
    });
    test("The date that this test is being written should be a Monday.", () => {
        expect(millennium_week_day_1.MillenniumWeekDay.getViaDate((new millennium_date_builder_1.MillenniumDateBuilder())
            .withYear(2019)
            .withMonth(millennium_month_1.MillenniumMonth.AUGUST)
            .withDay(5)
            .build())).toBe(millennium_week_day_1.MillenniumWeekDay.MONDAY);
    });
});
//# sourceMappingURL=millennium-week-day.test.js.map