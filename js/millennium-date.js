"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const millennium_month_1 = require("./millennium-month");
const millennium_date_math_1 = require("./millennium-date-math");
const millennium_timespan_1 = require("./millennium-timespan");
const millennium_date_builder_1 = require("./millennium-date-builder");
const millennium_time_unit_1 = require("./millennium-time-unit");
class MillenniumDate {
    constructor(epochTime, offsetHours) {
        this.epochTime = epochTime;
        this.offsetHours = (offsetHours !== undefined ? offsetHours : 0);
    }
    static fromNow() {
        let now = new Date();
        return new MillenniumDate(now.getTime(), (-now.getTimezoneOffset() / 60));
    }
    static fromDate(date) {
        return new MillenniumDate(date.getTime(), (-date.getTimezoneOffset() / 60));
    }
    static fromEpochTime(epochTime, offsetHours) {
        return new MillenniumDate(epochTime, offsetHours);
    }
    static fromTheBeginningOfTime(offsetHours) {
        return new MillenniumDate(0, offsetHours);
    }
    isYearLeapYear() {
        return millennium_date_math_1.MillenniumDateMath.isYearLeapYear(this.getYear());
    }
    getYear() {
        let millisecondApproximation = this.getAdjustedEpochTime();
        let yearApproximation = (MillenniumDate.EPOCH_YEAR + (millisecondApproximation / millennium_time_unit_1.MillenniumTimeUnit.YEAR.getMilliseconds()));
        let leapYearBeingInspected;
        if (this.getAdjustedEpochTime() >= 0) {
            leapYearBeingInspected = 1972;
            while (leapYearBeingInspected < Math.floor(yearApproximation)) {
                if (millennium_date_math_1.MillenniumDateMath.isYearLeapYear(leapYearBeingInspected)) {
                    millisecondApproximation -= millennium_time_unit_1.MillenniumTimeUnit.DAY.getMilliseconds();
                    yearApproximation = (MillenniumDate.EPOCH_YEAR + (millisecondApproximation / millennium_time_unit_1.MillenniumTimeUnit.YEAR.getMilliseconds()));
                }
                leapYearBeingInspected += 4;
            }
        }
        else {
            leapYearBeingInspected = 1968;
            while (leapYearBeingInspected > yearApproximation) {
                if (millennium_date_math_1.MillenniumDateMath.isYearLeapYear(leapYearBeingInspected)) {
                    millisecondApproximation += millennium_time_unit_1.MillenniumTimeUnit.DAY.getMilliseconds();
                    yearApproximation = (MillenniumDate.EPOCH_YEAR + (millisecondApproximation / millennium_time_unit_1.MillenniumTimeUnit.YEAR.getMilliseconds()));
                }
                leapYearBeingInspected -= 4;
            }
        }
        return Math.floor(yearApproximation);
    }
    getMonth() {
        let year = this.getYear();
        let beginningOfYear = (new millennium_date_builder_1.MillenniumDateBuilder()).withYear(year).build();
        let dayInYear = millennium_timespan_1.MillenniumTimespan.between(beginningOfYear, this).toDays();
        return millennium_month_1.MillenniumMonth.getMonthByDayInYear(dayInYear, year);
    }
    getDayOfMonth() {
        let beginningOfMonth = (new millennium_date_builder_1.MillenniumDateBuilder())
            .withYear(this.getYear())
            .withMonth(this.getMonth())
            .build();
        return (Math.floor(millennium_timespan_1.MillenniumTimespan.between(beginningOfMonth, this).toDays()) + 1);
    }
    getHourOfDay24HourZeroIndexed() {
        let beginningOfDay = (new millennium_date_builder_1.MillenniumDateBuilder())
            .withYear(this.getYear())
            .withMonth(this.getMonth())
            .withDay(this.getDayOfMonth())
            .build();
        return (Math.floor(millennium_timespan_1.MillenniumTimespan.between(beginningOfDay, this).toHours()));
    }
    getHourOfDay24Hour() {
        let zeroIndexed = this.getHourOfDay24HourZeroIndexed();
        if (zeroIndexed === 0)
            return 12;
        else
            return zeroIndexed + 1;
    }
    getHourOfDay12Hour() {
        return (this.getHourOfDay24Hour() % 13);
    }
    get12HourPeriod() {
        return (this.getHourOfDay24HourZeroIndexed() > 12 ? "PM" : "AM");
    }
    getMinuteOfHour() {
        let beginningOfHour = (new millennium_date_builder_1.MillenniumDateBuilder())
            .withYear(this.getYear())
            .withMonth(this.getMonth())
            .withDay(this.getDayOfMonth())
            .withHours(this.getHourOfDay24HourZeroIndexed())
            .build();
        return (Math.floor(millennium_timespan_1.MillenniumTimespan.between(beginningOfHour, this).toMinutes()));
    }
    getSecondOfMinute() {
        let beginningOfMinute = (new millennium_date_builder_1.MillenniumDateBuilder())
            .withYear(this.getYear())
            .withMonth(this.getMonth())
            .withDay(this.getDayOfMonth())
            .withHours(this.getHourOfDay24HourZeroIndexed())
            .withMinutes(this.getMinuteOfHour())
            .build();
        return (Math.floor(millennium_timespan_1.MillenniumTimespan.between(beginningOfMinute, this).toSeconds()));
    }
    getMillisecondOfSecond() {
        let beginningOfSecond = (new millennium_date_builder_1.MillenniumDateBuilder())
            .withYear(this.getYear())
            .withMonth(this.getMonth())
            .withDay(this.getDayOfMonth())
            .withHours(this.getHourOfDay24HourZeroIndexed())
            .withMinutes(this.getMinuteOfHour())
            .withSeconds(this.getSecondOfMinute())
            .build();
        return (Math.floor(millennium_timespan_1.MillenniumTimespan.between(beginningOfSecond, this).toMilliseconds()));
    }
    getUTCOffset() {
        return this.offsetHours;
    }
    getEpochTime() {
        return this.epochTime;
    }
    getAdjustedEpochTime() {
        return (this.getEpochTime() + (this.getUTCOffset() * millennium_time_unit_1.MillenniumTimeUnit.HOUR.getMilliseconds()));
    }
    toString() {
        let month = this.getMonth().getMonthName();
        let day = this.getDayOfMonth();
        let ordinalIndicator = millennium_date_math_1.MillenniumDateMath.getOrdinalIndicator(day);
        let year = this.getYear();
        let utcString = "(UTC" + (this.getUTCOffset() >= 0 ? "+" : "") + this.getUTCOffset() + ")";
        let hour = this.getHourOfDay12Hour().toString();
        let minute = this.getMinuteOfHour().toString();
        let second = this.getSecondOfMinute().toString();
        let millisecond = this.getMillisecondOfSecond().toString();
        let period = this.get12HourPeriod();
        while (minute.length < 2)
            minute = "0" + minute;
        while (second.length < 2)
            second = "0" + second;
        while (millisecond.length < 3)
            millisecond = "0" + millisecond;
        return (month + " " + day + ordinalIndicator + ", " + year + " " +
            utcString + " " + hour + ":" + minute + ":" + second + "." + millisecond + " " + period);
    }
}
MillenniumDate.EPOCH_YEAR = 1970;
exports.MillenniumDate = MillenniumDate;
//# sourceMappingURL=millennium-date.js.map