/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:20 PM -- March 07th, 2019.
 *	Project: millennium
 */

/**
 * A enumeration of possible units of time.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class MillenniumTimeUnit {
	
	//                                                                 Singular         Plural          Time in Milliseconds
	
	public static readonly MILLISECOND: MillenniumTimeUnit =	new MillenniumTimeUnit("millisecond",	"milliseconds",	1);
	
	public static readonly SECOND: MillenniumTimeUnit =			new MillenniumTimeUnit("second",		"seconds",		1000);
	
	public static readonly MINUTE: MillenniumTimeUnit =			new MillenniumTimeUnit("minute",		"minutes",		1000 * 60);
	
	public static readonly HOUR: MillenniumTimeUnit =			new MillenniumTimeUnit("hour",			"hours",		1000 * 60 * 60);
	
	public static readonly DAY: MillenniumTimeUnit =			new MillenniumTimeUnit("day",			"days",			1000 * 60 * 60 * 24);
	
	public static readonly WEEK: MillenniumTimeUnit =			new MillenniumTimeUnit("week",			"weeks",		1000 * 60 * 60 * 24 * 7);
	
	public static readonly MONTH: MillenniumTimeUnit =			new MillenniumTimeUnit("month",			"months",		1000 * 60 * 60 * 24 * 30);
	
	public static readonly YEAR: MillenniumTimeUnit =			new MillenniumTimeUnit("year",			"years",		1000 * 60 * 60 * 24 * 365);
	
	public static readonly DECADE: MillenniumTimeUnit =			new MillenniumTimeUnit("decade",		"decades",		1000 * 60 * 60 * 24 * 365 * 10);
	
	public static readonly CENTURY: MillenniumTimeUnit =		new MillenniumTimeUnit("century",		"centuries",	1000 * 60 * 60 * 24 * 365 * 100);
	
	public static readonly MILLENNIUM: MillenniumTimeUnit =		new MillenniumTimeUnit("millennium",	"millennia",	1000 * 60 * 60 * 24 * 365 * 1000);
	
	private readonly singularName: string;
	
	private readonly pluralName: string;
	
	private readonly milliseconds: number;
	
	private constructor(singularName: string, pluralName: string, milliseconds: number) {
		
		this.singularName = singularName;
		this.pluralName = pluralName;
		this.milliseconds = milliseconds;
		
	}
	
	public getSingularName(): string {
		
		return this.singularName;
		
	}
	
	public getPluralName(): string {
		
		return this.pluralName;
		
	}
	
	public getMilliseconds(): number {
		
		return this.milliseconds;
		
	}
	
}