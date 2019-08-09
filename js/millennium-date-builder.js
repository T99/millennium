"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_base_1 = require("builder-base");
const millennium_date_1 = require("./millennium-date");
const millennium_date_math_1 = require("./millennium-date-math");
const millennium_time_unit_1 = require("./millennium-time-unit");
class MillenniumDateBuilder extends builder_base_1.BuilderBase {
    constructor() {
        super();
        this.addOptionals("year", "month", "day", "hours", "minutes", "seconds", "milliseconds", "offset");
    }
    withYear(year) {
        this.fulfillRequirement("year", year);
        return this;
    }
    withMonth(month) {
        this.fulfillRequirement("month", month);
        return this;
    }
    withDay(day) {
        if (day === 0)
            throw new Error("ERR | Day 0 does not exist. Did you mean to call TSDateBuilder#withDayZeroIndexed(number)?");
        else if (day > 0)
            this.fulfillRequirement("day", day - 1);
        else if (day < 0)
            this.fulfillRequirement("day", day);
        return this;
    }
    withDayZeroIndexed(day) {
        this.fulfillRequirement("day", day);
        return this;
    }
    withHours(hours) {
        this.fulfillRequirement("hours", hours);
        return this;
    }
    withMinutes(minutes) {
        this.fulfillRequirement("minutes", minutes);
        return this;
    }
    withSeconds(seconds) {
        this.fulfillRequirement("seconds", seconds);
        return this;
    }
    withMilliseconds(milliseconds) {
        this.fulfillRequirement("milliseconds", milliseconds);
        return this;
    }
    withOffset(offsetHours) {
        this.fulfillRequirement("offset", offsetHours);
        return this;
    }
    build() {
        let milliseconds = 0;
        if (this.checkFulfillment("year")) {
            let year = this.getValueOfRequirement("year");
            let leapYears = millennium_date_math_1.MillenniumDateMath.getLeapYearsBetweenYears(1970, year);
            milliseconds += ((((year - 1970) * 365) + leapYears) * millennium_time_unit_1.MillenniumTimeUnit.DAY.getMilliseconds());
        }
        if (this.checkFulfillment("month")) {
            let month = this.getValueOfRequirement("month");
            let relevantYear = (this.checkFulfillment("year") ? this.getValueOfRequirement("year") : 1970);
            let daysSinceBeginningOfYear = month.getDaysSinceBeginningOfYear(relevantYear);
            milliseconds += (daysSinceBeginningOfYear * millennium_time_unit_1.MillenniumTimeUnit.DAY.getMilliseconds());
        }
        if (this.checkFulfillment("day")) {
            milliseconds += (this.getValueOfRequirement("day") * millennium_time_unit_1.MillenniumTimeUnit.DAY.getMilliseconds());
        }
        if (this.checkFulfillment("hours")) {
            milliseconds += (this.getValueOfRequirement("hours") * millennium_time_unit_1.MillenniumTimeUnit.HOUR.getMilliseconds());
        }
        if (this.checkFulfillment("minutes")) {
            milliseconds += (this.getValueOfRequirement("minutes") * millennium_time_unit_1.MillenniumTimeUnit.MINUTE.getMilliseconds());
        }
        if (this.checkFulfillment("seconds")) {
            milliseconds += (this.getValueOfRequirement("seconds") * millennium_time_unit_1.MillenniumTimeUnit.SECOND.getMilliseconds());
        }
        if (this.checkFulfillment("milliseconds")) {
            milliseconds += (this.getValueOfRequirement("milliseconds") * millennium_time_unit_1.MillenniumTimeUnit.MILLISECOND.getMilliseconds());
        }
        if (this.checkFulfillment("offset")) {
            milliseconds -= (this.getValueOfRequirement("offset") * millennium_time_unit_1.MillenniumTimeUnit.HOUR.getMilliseconds());
        }
        if (this.checkFulfillment("offset"))
            return millennium_date_1.MillenniumDate.fromEpochTime(milliseconds, this.getValueOfRequirement("offset"));
        else
            return millennium_date_1.MillenniumDate.fromEpochTime(milliseconds);
    }
}
exports.MillenniumDateBuilder = MillenniumDateBuilder;
//# sourceMappingURL=millennium-date-builder.js.map