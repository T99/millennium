"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const millennium_time_unit_1 = require("./millennium-time-unit");
const millennium_date_1 = require("./millennium-date");
class MillenniumTimespan {
    constructor(milliseconds) {
        this.milliseconds = milliseconds;
    }
    static between(date1, date2) {
        let oldest = Math.min(date1.getAdjustedEpochTime(), date2.getAdjustedEpochTime());
        let newest = Math.max(date1.getAdjustedEpochTime(), date2.getAdjustedEpochTime());
        return new MillenniumTimespan(newest - oldest);
    }
    static since(date) {
        return new MillenniumTimespan(millennium_date_1.MillenniumDate.fromNow().getAdjustedEpochTime() - date.getAdjustedEpochTime());
    }
    static until(date) {
        return new MillenniumTimespan(date.getAdjustedEpochTime() - millennium_date_1.MillenniumDate.fromNow().getAdjustedEpochTime());
    }
    toMilliseconds() {
        return this.milliseconds;
    }
    toSeconds() {
        return (this.milliseconds / millennium_time_unit_1.MillenniumTimeUnit.SECOND.getMilliseconds());
    }
    toMinutes() {
        return (this.milliseconds / millennium_time_unit_1.MillenniumTimeUnit.MINUTE.getMilliseconds());
    }
    toHours() {
        return (this.milliseconds / millennium_time_unit_1.MillenniumTimeUnit.HOUR.getMilliseconds());
    }
    toDays() {
        return (this.milliseconds / millennium_time_unit_1.MillenniumTimeUnit.DAY.getMilliseconds());
    }
    toWeeks() {
        return (this.milliseconds / millennium_time_unit_1.MillenniumTimeUnit.WEEK.getMilliseconds());
    }
    toMonths() {
        return (this.milliseconds / millennium_time_unit_1.MillenniumTimeUnit.MONTH.getMilliseconds());
    }
    toYears() {
        return (this.milliseconds / millennium_time_unit_1.MillenniumTimeUnit.YEAR.getMilliseconds());
    }
    toStringFromUnits(units, enforceUse) {
        let sortedUnits = [];
        while (units.length !== 0) {
            let largestIndex = 0;
            for (let index = 1; index < units.length; index++) {
                if (units[index].getMilliseconds() > units[largestIndex].getMilliseconds())
                    largestIndex = index;
            }
            sortedUnits.push(units[largestIndex]);
            units.splice(largestIndex, 1);
        }
        let unitStrings = [];
        let remainingTime = this.milliseconds;
        for (let unit of sortedUnits) {
            let unitString = "";
            let amount = Math.floor(remainingTime / unit.getMilliseconds());
            if ((amount !== 0) || ((amount === 0) && (enforceUse === true))) {
                unitString += amount;
                unitString += " ";
                if (amount === 1)
                    unitString += unit.getSingularName();
                else
                    unitString += unit.getPluralName();
                remainingTime -= (amount * unit.getMilliseconds());
            }
            if (unitString !== "")
                unitStrings.push(unitString);
        }
        let finalResult = "";
        for (let index = 0; index < unitStrings.length; index++) {
            finalResult += unitStrings[index];
            if (index < unitStrings.length - 2)
                finalResult += ", ";
            else if (index < unitStrings.length - 1)
                finalResult += ", and ";
        }
        return finalResult;
    }
}
exports.MillenniumTimespan = MillenniumTimespan;
//# sourceMappingURL=millennium-timespan.js.map