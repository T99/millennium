"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const millennium_date_1 = require("./millennium-date");
const millennium_timespan_1 = require("./millennium-timespan");
class MillenniumWeekDay {
    constructor(name) {
        this.name = name;
        MillenniumWeekDay.addDayOfWeek(this);
    }
    static addDayOfWeek(dayOfWeek) {
        if (MillenniumWeekDay.DAYS_OF_WEEK === undefined)
            MillenniumWeekDay.DAYS_OF_WEEK = [];
        MillenniumWeekDay.DAYS_OF_WEEK.push(dayOfWeek);
    }
    static getViaName(name) {
        for (let day of MillenniumWeekDay.DAYS_OF_WEEK) {
            if (name.toLowerCase() === day.getName().toLowerCase())
                return day;
        }
        dayIterator: for (let day of MillenniumWeekDay.DAYS_OF_WEEK) {
            if (name.length < day.getName().length) {
                let dayNameChars = day.getName().split("");
                let searchChars = name.split("");
                for (let cursor = 0; cursor < searchChars.length; cursor++) {
                    if (dayNameChars[cursor] !== searchChars[cursor])
                        continue dayIterator;
                }
                return day;
            }
        }
        return undefined;
    }
    static getViaIndex(index, startingFrom = MillenniumWeekDay.SUNDAY) {
        let baseIndex = MillenniumWeekDay.DAYS_OF_WEEK.indexOf(startingFrom);
        let rangeLength = MillenniumWeekDay.DAYS_OF_WEEK.length;
        let actualIndex = (((baseIndex + index) % rangeLength) + rangeLength) % rangeLength;
        return MillenniumWeekDay.DAYS_OF_WEEK[actualIndex];
    }
    static getViaDate(date) {
        let daysBetween = Math.floor((millennium_timespan_1.MillenniumTimespan.between(millennium_date_1.MillenniumDate.fromTheBeginningOfTime(), date)).toDays());
        let dayOfWeek = MillenniumWeekDay.getViaIndex(daysBetween, MillenniumWeekDay.THURSDAY);
        return dayOfWeek;
    }
    getName() {
        return this.name;
    }
}
MillenniumWeekDay.MONDAY = new MillenniumWeekDay("Monday");
MillenniumWeekDay.TUESDAY = new MillenniumWeekDay("Tuesday");
MillenniumWeekDay.WEDNESDAY = new MillenniumWeekDay("Wednesday");
MillenniumWeekDay.THURSDAY = new MillenniumWeekDay("Thursday");
MillenniumWeekDay.FRIDAY = new MillenniumWeekDay("Friday");
MillenniumWeekDay.SATURDAY = new MillenniumWeekDay("Saturday");
MillenniumWeekDay.SUNDAY = new MillenniumWeekDay("Sunday");
exports.MillenniumWeekDay = MillenniumWeekDay;
//# sourceMappingURL=millennium-week-day.js.map