"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MillenniumTimeUnit {
    constructor(singularName, pluralName, milliseconds) {
        this.singularName = singularName;
        this.pluralName = pluralName;
        this.milliseconds = milliseconds;
    }
    getSingularName() {
        return this.singularName;
    }
    getPluralName() {
        return this.pluralName;
    }
    getMilliseconds() {
        return this.milliseconds;
    }
}
MillenniumTimeUnit.MILLISECOND = new MillenniumTimeUnit("millisecond", "milliseconds", 1);
MillenniumTimeUnit.SECOND = new MillenniumTimeUnit("second", "seconds", 1000);
MillenniumTimeUnit.MINUTE = new MillenniumTimeUnit("minute", "minutes", 1000 * 60);
MillenniumTimeUnit.HOUR = new MillenniumTimeUnit("hour", "hours", 1000 * 60 * 60);
MillenniumTimeUnit.DAY = new MillenniumTimeUnit("day", "days", 1000 * 60 * 60 * 24);
MillenniumTimeUnit.WEEK = new MillenniumTimeUnit("week", "weeks", 1000 * 60 * 60 * 24 * 7);
MillenniumTimeUnit.MONTH = new MillenniumTimeUnit("month", "months", 1000 * 60 * 60 * 24 * 30);
MillenniumTimeUnit.YEAR = new MillenniumTimeUnit("year", "years", 1000 * 60 * 60 * 24 * 365);
MillenniumTimeUnit.DECADE = new MillenniumTimeUnit("decade", "decades", 1000 * 60 * 60 * 24 * 365 * 10);
MillenniumTimeUnit.CENTURY = new MillenniumTimeUnit("century", "centuries", 1000 * 60 * 60 * 24 * 365 * 100);
MillenniumTimeUnit.MILLENNIUM = new MillenniumTimeUnit("millennium", "millennia", 1000 * 60 * 60 * 24 * 365 * 1000);
exports.MillenniumTimeUnit = MillenniumTimeUnit;
//# sourceMappingURL=millennium-time-unit.js.map