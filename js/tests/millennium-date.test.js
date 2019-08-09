"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const millennium_date_1 = require("../millennium-date");
const millennium_date_builder_1 = require("../millennium-date-builder");
const millennium_month_1 = require("../millennium-month");
describe("Initialization", () => {
    test("Initialization at current time.", () => {
        let date = millennium_date_1.MillenniumDate.fromNow();
        console.log("12 Hour Representation: " + date.toString());
        console.log("24 Hour Representation: " + date.toString(true));
    });
    test("Initialization at the 'beginning of time'.", () => {
        let date = millennium_date_1.MillenniumDate.fromTheBeginningOfTime(0);
        console.log("12 Hour Representation: " + date.toString());
        console.log("24 Hour Representation: " + date.toString(true));
    });
});
describe("Per-method tests.", () => {
    let testData = [
        {
            dateName: "Original testing date",
            date: (new millennium_date_builder_1.MillenniumDateBuilder())
                .withYear(2019)
                .withMonth(millennium_month_1.MillenniumMonth.JULY)
                .withDay(31)
                .withHours(23)
                .withMinutes(45)
                .build()
        },
        {
            dateName: "Beginning of time",
            date: millennium_date_1.MillenniumDate.fromTheBeginningOfTime()
        },
        {
            dateName: "From leap day on leap year",
            date: (new millennium_date_builder_1.MillenniumDateBuilder())
                .withYear(2016)
                .withMonth(millennium_month_1.MillenniumMonth.FEBRUARY)
                .withDay(29)
                .withHours(14)
                .withMinutes(11)
                .withSeconds(47)
                .withMilliseconds(859)
                .build()
        }
    ];
    testData;
    for (let data of testData) {
        describe("For: '" + data.dateName + "'.", () => {
            describe("#isYearLeapYear", () => {
            });
            describe("#getYear", () => {
            });
            describe("#getMonth", () => {
            });
            describe("#getDayOfMonth", () => {
            });
            describe("", () => {
            });
        });
    }
});
//# sourceMappingURL=millennium-date.test.js.map