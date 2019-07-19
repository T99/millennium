/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:18 PM -- March 07th, 2019.
 *	Project: millennium
 */

import { BuilderBase } from "builder-base";
import { MillenniumDate } from "./millennium-date";
import { MillenniumDateMath } from "./millennium-date-math";
import { MillenniumTimeUnit } from "./millennium-time-unit";
import { MillenniumMonth } from "./millennium-month";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class MillenniumDateBuilder extends BuilderBase<MillenniumDate> {

	public constructor() {

		super();

		this.addOptionals(
			"year",
			"month",
			"day",
			"hours",
			"minutes",
			"seconds",
			"milliseconds",
			"offset"
		);

	}

	public withYear(year: number): MillenniumDateBuilder {

		this.fulfillRequirement("year", year);

		return this;

	}

	public withMonth(month: MillenniumMonth): MillenniumDateBuilder {

		this.fulfillRequirement("month", month);

		return this;

	}

	public withDay(day: number): MillenniumDateBuilder {

		if (day === 0) throw new Error("ERR | Day 0 does not exist. Did you mean to call TSDateBuilder#withDayZeroIndexed(number)?");
		else if (day > 0) this.fulfillRequirement("day", day - 1);
		else if (day < 0) this.fulfillRequirement("day", day);

		return this;

	}

	public withDayZeroIndexed(day: number): MillenniumDateBuilder {

		this.fulfillRequirement("day", day);

		return this;

	}

	public withHours(hours: number): MillenniumDateBuilder {

		this.fulfillRequirement("hours", hours);

		return this;

	}

	public withMinutes(minutes: number): MillenniumDateBuilder {

		this.fulfillRequirement("minutes", minutes);

		return this;

	}

	public withSeconds(seconds: number): MillenniumDateBuilder {

		this.fulfillRequirement("seconds", seconds);

		return this;

	}

	public withMilliseconds(milliseconds: number): MillenniumDateBuilder {

		this.fulfillRequirement("milliseconds", milliseconds);

		return this;

	}

	public withOffset(offsetHours: number): MillenniumDateBuilder {

		this.fulfillRequirement("offset", offsetHours);

		return this;

	}

	public build(): MillenniumDate {

		let milliseconds: number = 0;

		if (this.checkFulfillment("year")) {

			let year: number = this.getValueOfRequirement("year");
			let leapYears: number = MillenniumDateMath.getLeapYearsBetweenYears(1970, year);

			milliseconds += ((((year - 1970) * 365) + leapYears) * MillenniumTimeUnit.DAY.getMilliseconds());

		}

		if (this.checkFulfillment("month")) {

			let month: MillenniumMonth = this.getValueOfRequirement("month");
			let relevantYear: number = (this.checkFulfillment("year") ? this.getValueOfRequirement("year") : 1970);
			let daysSinceBeginningOfYear: number = month.getDaysSinceBeginningOfYear(relevantYear);

			milliseconds += (daysSinceBeginningOfYear * MillenniumTimeUnit.DAY.getMilliseconds());

		}

		if (this.checkFulfillment("day")) {

			milliseconds += (this.getValueOfRequirement("day") * MillenniumTimeUnit.DAY.getMilliseconds());

		}

		if (this.checkFulfillment("hours")) {

			milliseconds += (this.getValueOfRequirement("hours") * MillenniumTimeUnit.HOUR.getMilliseconds());

		}

		if (this.checkFulfillment("minutes")) {

			milliseconds += (this.getValueOfRequirement("minutes") * MillenniumTimeUnit.MINUTE.getMilliseconds());

		}

		if (this.checkFulfillment("seconds")) {

			milliseconds += (this.getValueOfRequirement("seconds") * MillenniumTimeUnit.SECOND.getMilliseconds());

		}

		if (this.checkFulfillment("milliseconds")) {

			milliseconds += (this.getValueOfRequirement("milliseconds") * MillenniumTimeUnit.MILLISECOND.getMilliseconds());

		}

		if (this.checkFulfillment("offset")) {

			milliseconds -= (this.getValueOfRequirement("offset") * MillenniumTimeUnit.HOUR.getMilliseconds());

		}

		if (this.checkFulfillment("offset")) return MillenniumDate.fromEpochTime(milliseconds, this.getValueOfRequirement("offset"));
		else return MillenniumDate.fromEpochTime(milliseconds);

	}
}