"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const millennium_date_math_1 = require("./millennium-date-math");
class MillenniumMonth {
    constructor(monthNumber, monthName, daysInMonth) {
        this.monthNumber = monthNumber;
        this.monthName = monthName;
        this.daysInMonth = daysInMonth;
        MillenniumMonth.addMonthNumberMapping(this.monthNumber, this);
        MillenniumMonth.addMonthNameMapping(this.monthName, this);
    }
    static addMonthNumberMapping(monthNumber, month) {
        if (MillenniumMonth.monthNumberMap === undefined)
            MillenniumMonth.monthNumberMap = new Map();
        MillenniumMonth.monthNumberMap.set(monthNumber, month);
    }
    static addMonthNameMapping(monthName, month) {
        if (MillenniumMonth.monthNameMap === undefined)
            MillenniumMonth.monthNameMap = new Map();
        MillenniumMonth.monthNameMap.set(monthName.toLowerCase(), month);
    }
    static getMonthByName(monthName) {
        if (MillenniumMonth.monthNameMap.has(monthName.toLowerCase())) {
            return MillenniumMonth.monthNameMap.get(monthName.toLowerCase());
        }
        else
            throw new Error("ERR | Attempted to get a month from a month name that does not exist: '" + monthName + "'.");
    }
    static getMonthByNumber(monthNumber) {
        if (monthNumber === 0)
            throw new Error("ERR | Month 0 does not exist. Did you mean to call TSMonth#getMonthByNumberZeroIndexed(number)?");
        else if (monthNumber > 0)
            return MillenniumMonth.monthNumberMap.get((monthNumber - 1) % 12);
        else
            return MillenniumMonth.monthNumberMap.get((12 + (monthNumber % 12)) % 12);
    }
    static getMonthByNumberZeroIndexed(monthNumber) {
        if (monthNumber >= 0)
            return MillenniumMonth.monthNumberMap.get(monthNumber % 12);
        else
            return MillenniumMonth.monthNumberMap.get((12 + (monthNumber % 12)) % 12);
    }
    static getMonthByDayInYear(day, year) {
        let dayCount = day;
        let currentYear = year;
        if (day < 0) {
            while (dayCount < 0) {
                dayCount += (millennium_date_math_1.MillenniumDateMath.isYearLeapYear(currentYear) ? 366 : 365);
                currentYear--;
            }
        }
        else {
            while (dayCount > (millennium_date_math_1.MillenniumDateMath.isYearLeapYear(currentYear) ? 366 : 365)) {
                dayCount -= (millennium_date_math_1.MillenniumDateMath.isYearLeapYear(currentYear) ? 366 : 365);
                currentYear++;
            }
        }
        for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
            let currentMonth = MillenniumMonth.getMonthByNumberZeroIndexed(monthIndex);
            if (dayCount <= currentMonth.getDaysInMonth(currentYear))
                return currentMonth;
            else
                dayCount -= currentMonth.getDaysInMonth(currentYear);
        }
        return undefined;
    }
    static getRelativeMonth(relativeIndex) {
        return MillenniumMonth.thisMonth().getRelativeMonth(relativeIndex);
    }
    static thisMonth() {
        return MillenniumMonth.getMonthByNumberZeroIndexed((new Date()).getMonth());
    }
    static lastMonth() {
        return MillenniumMonth.thisMonth().lastMonth();
    }
    static nextMonth() {
        return MillenniumMonth.thisMonth().nextMonth();
    }
    getRelativeMonth(relativeIndex) {
        return MillenniumMonth.getMonthByNumberZeroIndexed(this.monthNumber + relativeIndex);
    }
    lastMonth() {
        return this.getRelativeMonth(-1);
    }
    nextMonth() {
        return this.getRelativeMonth(1);
    }
    getMonthNumber() {
        return (this.monthNumber + 1);
    }
    getMonthNumberZeroIndexed() {
        return this.monthNumber;
    }
    getMonthName() {
        return this.monthName;
    }
    getDaysInMonth(year) {
        if ((this === MillenniumMonth.FEBRUARY) && (millennium_date_math_1.MillenniumDateMath.isYearLeapYear(year)))
            return 29;
        else
            return this.daysInMonth;
    }
    getDaysSinceBeginningOfYear(year) {
        let monthNumber = this.getMonthNumberZeroIndexed();
        let daysBefore = 0;
        while (monthNumber > 0)
            daysBefore += MillenniumMonth.getMonthByNumberZeroIndexed(--monthNumber).getDaysInMonth(year);
        return daysBefore;
    }
    toString() {
        return this.getMonthName();
    }
}
MillenniumMonth.JANUARY = new MillenniumMonth(0, "January", 31);
MillenniumMonth.FEBRUARY = new MillenniumMonth(1, "February", 28);
MillenniumMonth.MARCH = new MillenniumMonth(2, "March", 31);
MillenniumMonth.APRIL = new MillenniumMonth(3, "April", 30);
MillenniumMonth.MAY = new MillenniumMonth(4, "May", 31);
MillenniumMonth.JUNE = new MillenniumMonth(5, "June", 30);
MillenniumMonth.JULY = new MillenniumMonth(6, "July", 31);
MillenniumMonth.AUGUST = new MillenniumMonth(7, "August", 31);
MillenniumMonth.SEPTEMBER = new MillenniumMonth(8, "September", 30);
MillenniumMonth.NOVEMBER = new MillenniumMonth(9, "October", 31);
MillenniumMonth.OCTOBER = new MillenniumMonth(10, "November", 30);
MillenniumMonth.DECEMBER = new MillenniumMonth(11, "December", 31);
exports.MillenniumMonth = MillenniumMonth;
//# sourceMappingURL=millennium-month.js.map