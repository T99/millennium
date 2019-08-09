"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const millennium_date_math_1 = require("../millennium-date-math");
let leapYearPeriodStart = 1800;
let leapYearPeriodEnd = 2400;
let leapYears = [
    1804, 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840, 1844, 1848, 1852, 1856, 1860, 1864, 1868, 1872, 1876,
    1880, 1884, 1888, 1892, 1896, 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956,
    1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032,
    2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2104, 2108, 2112,
    2116, 2120, 2124, 2128, 2132, 2136, 2140, 2144, 2148, 2152, 2156, 2160, 2164, 2168, 2172, 2176, 2180, 2184, 2188,
    2192, 2196, 2204, 2208, 2212, 2216, 2220, 2224, 2228, 2232, 2236, 2240, 2244, 2248, 2252, 2256, 2260, 2264, 2268,
    2272, 2276, 2280, 2284, 2288, 2292, 2296, 2304, 2308, 2312, 2316, 2320, 2324, 2328, 2332, 2336, 2340, 2344, 2348,
    2352, 2356, 2360, 2364, 2368, 2372, 2376, 2380, 2384, 2388, 2392, 2396, 2400
];
describe("Per-method tests.", () => {
    describe("#isYearLeapYear", () => {
        test("From leap year list.", () => {
            let leapYearsCursor = 0;
            for (let year = leapYearPeriodStart; year <= leapYearPeriodEnd; year++) {
                if (year === leapYears[leapYearsCursor]) {
                    expect(millennium_date_math_1.MillenniumDateMath.isYearLeapYear(year)).toBeTruthy();
                    leapYearsCursor++;
                }
                else
                    expect(millennium_date_math_1.MillenniumDateMath.isYearLeapYear(year)).toBeFalsy();
            }
        });
    });
    describe("#getLeapYearsBetweenYears", () => {
        test("From leap year list.", () => {
            expect(millennium_date_math_1.MillenniumDateMath.getLeapYearsBetweenYears(leapYearPeriodStart, leapYearPeriodEnd + 1)).toBe(leapYears.length);
        });
        test("For reverse-order years.", () => {
            expect(millennium_date_math_1.MillenniumDateMath.getLeapYearsBetweenYears(leapYearPeriodEnd + 1, leapYearPeriodStart)).toBe(leapYears.length);
        });
        test("For same-year check.", () => {
            expect(millennium_date_math_1.MillenniumDateMath.getLeapYearsBetweenYears(2000, 2000)).toBe(0);
        });
    });
    describe("#getOrdinalIndicator", () => {
        test("Negative numbers.", () => {
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-1)).toBe("st");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-2)).toBe("nd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-3)).toBe("rd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-4)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-5)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-6)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-7)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-8)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-9)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-10)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-11)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-12)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-13)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-14)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-15)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-16)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-17)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-18)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-19)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-20)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-21)).toBe("st");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-22)).toBe("nd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-23)).toBe("rd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-24)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-25)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-26)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-27)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-28)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-29)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-30)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-31)).toBe("st");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-32)).toBe("nd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-33)).toBe("rd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-34)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-35)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-36)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-37)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-38)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-39)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-40)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-41)).toBe("st");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-42)).toBe("nd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-43)).toBe("rd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-44)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-45)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-46)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-47)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-48)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-49)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(-50)).toBe("th");
        });
        test("Zero.", () => {
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(0)).toBe("th");
        });
        test("Positive numbers.", () => {
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(1)).toBe("st");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(2)).toBe("nd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(3)).toBe("rd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(4)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(5)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(6)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(7)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(8)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(9)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(10)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(11)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(12)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(13)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(14)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(15)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(16)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(17)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(18)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(19)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(20)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(21)).toBe("st");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(22)).toBe("nd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(23)).toBe("rd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(24)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(25)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(26)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(27)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(28)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(29)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(30)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(31)).toBe("st");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(32)).toBe("nd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(33)).toBe("rd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(34)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(35)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(36)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(37)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(38)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(39)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(40)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(41)).toBe("st");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(42)).toBe("nd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(43)).toBe("rd");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(44)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(45)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(46)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(47)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(48)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(49)).toBe("th");
            expect(millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(50)).toBe("th");
        });
    });
});
//# sourceMappingURL=millennium-date-math.test.js.map