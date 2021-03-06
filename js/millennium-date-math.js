"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MillenniumDateMath {
    constructor() { }
    static isYearLeapYear(year) {
        year = Math.floor(year);
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                return (year % 400 === 0);
            }
            else
                return true;
        }
        else
            return false;
    }
    static getLeapYearsBetweenYears(begin, end) {
        let firstLeapYear = Math.min(begin, end);
        let lastLeapYear = Math.max(begin, end) - 1;
        while (!MillenniumDateMath.isYearLeapYear(firstLeapYear))
            firstLeapYear++;
        while (!MillenniumDateMath.isYearLeapYear(lastLeapYear))
            lastLeapYear--;
        if (firstLeapYear > lastLeapYear)
            return 0;
        else {
            let precursoryResult = Math.abs((lastLeapYear - firstLeapYear) / 4) + 1;
            let firstCentury = Math.ceil(firstLeapYear / 100) * 100;
            let lastCentury = Math.floor(lastLeapYear / 100) * 100;
            for (let year = firstCentury; year <= lastCentury; year += 100) {
                if (!MillenniumDateMath.isYearLeapYear(year))
                    precursoryResult--;
            }
            return precursoryResult;
        }
    }
    static getOrdinalIndicator(number) {
        if (number < 0)
            number *= -1;
        if (((number % 10) === 1) && number !== 11)
            return "st";
        if (((number % 10) === 2) && number !== 12)
            return "nd";
        if (((number % 10) === 3) && number !== 13)
            return "rd";
        else
            return "th";
    }
}
exports.MillenniumDateMath = MillenniumDateMath;
//# sourceMappingURL=millennium-date-math.js.map