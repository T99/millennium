/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:58 AM -- March 08th, 2019.
 *	Project: millennium
 */

/**
 * An enumeration of possible time zones.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class MillenniumTimeZone {
	
	// TODO [3/8/19 @ 2:19 AM] - Finish this class's enum members.
	
	public static readonly UTC_POS_14: MillenniumTimeZone =		new MillenniumTimeZone(+14,		"LINT");
	
	public static readonly UTC_POS_13_75: MillenniumTimeZone =	new MillenniumTimeZone(+13.75,	"CHADT");
	
	public static readonly UTC_POS_13: MillenniumTimeZone =		new MillenniumTimeZone(+13,		"NZDT", "PHOT", "TKT", "TOT");
	
	public static readonly UTC_POS_12_75: MillenniumTimeZone =	new MillenniumTimeZone(+12.75,	"CHAST");
	
	public static readonly UTC_POS_12: MillenniumTimeZone =		new MillenniumTimeZone(+12,		"");
	
	public static readonly UTC_POS_11: MillenniumTimeZone =		new MillenniumTimeZone(+11,		"");
	
	public static readonly UTC_POS_10: MillenniumTimeZone =		new MillenniumTimeZone(+10,		"");
	
	public static readonly UTC_POS_9: MillenniumTimeZone =		new MillenniumTimeZone(+9,		"");
	
	public static readonly UTC_POS_8: MillenniumTimeZone =		new MillenniumTimeZone(+8,		"");
	
	public static readonly UTC_POS_7: MillenniumTimeZone =		new MillenniumTimeZone(+7,		"");
	
	public static readonly UTC_POS_6: MillenniumTimeZone =		new MillenniumTimeZone(+6,		"");
	
	public static readonly UTC_POS_5: MillenniumTimeZone =		new MillenniumTimeZone(+5,		"");
	
	public static readonly UTC_POS_4: MillenniumTimeZone =		new MillenniumTimeZone(+4,		"");
	
	public static readonly UTC_POS_3: MillenniumTimeZone =		new MillenniumTimeZone(+3,		"");
	
	public static readonly UTC_POS_2: MillenniumTimeZone =		new MillenniumTimeZone(+2,		"");
	
	public static readonly UTC_POS_1: MillenniumTimeZone =		new MillenniumTimeZone(+1,		"BST", "CET", "DFT", "IST", "MET", "WAT", "WEST");
	
	public static readonly UTC: MillenniumTimeZone =			new MillenniumTimeZone(0,		"UTC", "GMT", "AZOST", "EGST", "WET");
	
	public static readonly UTC_NEG_1: MillenniumTimeZone =		new MillenniumTimeZone(-1,		"AZOT", "CVT", "EGT");
	
	public static readonly UTC_NEG_2: MillenniumTimeZone =		new MillenniumTimeZone(-2,		"BRST", "FNT", "GST", "PMDT", "UYST");
	
	public static readonly UTC_NEG_2_5: MillenniumTimeZone =	new MillenniumTimeZone(-2.5,	"BRST", "FNT", "GST", "PMDT", "UYST");
	
	public static readonly UTC_NEG_3: MillenniumTimeZone =		new MillenniumTimeZone(-3,		"ADT", "AMST", "ART", "BRT", "CLST", "FKST", "GFT", "PMST", "PYST", "ROTT",
																				"SRT", "UYT");
	
	public static readonly UTC_NEG_3_5: MillenniumTimeZone =	new MillenniumTimeZone(-3.5,	"NST", "NT");
	
	public static readonly UTC_NEG_4: MillenniumTimeZone =		new MillenniumTimeZone(-4,		"AMT", "AST", "BOT", "CDT", "CLT", "COST", "ECT", "EDT", "FKT", "GYT", "PYT",
																				"VET");
	
	public static readonly UTC_NEG_5: MillenniumTimeZone =		new MillenniumTimeZone(-5,		"EST", "CDT", "ACT", "COT", "EASST", "ECT", "PET");
	
	public static readonly UTC_NEG_6: MillenniumTimeZone =		new MillenniumTimeZone(-6,		"CST", "MDT", "EAST", "GALT");
	
	public static readonly UTC_NEG_7: MillenniumTimeZone =		new MillenniumTimeZone(-7,		"MST", "PDT");
	
	public static readonly UTC_NEG_8: MillenniumTimeZone =		new MillenniumTimeZone(-8,		"PST", "AKDT", "CIST");
	
	public static readonly UTC_NEG_9: MillenniumTimeZone =		new MillenniumTimeZone(-9,		"AKST", "GAMT", "GIT", "HDT");
	
	public static readonly UTC_NEG_9_5: MillenniumTimeZone =	new MillenniumTimeZone(-9.5,	"MART", "MIT");
	
	public static readonly UTC_NEG_10: MillenniumTimeZone =		new MillenniumTimeZone(-10,		"HST", "CKT", "SDT", "TAHT");
	
	public static readonly UTC_NEG_11: MillenniumTimeZone =		new MillenniumTimeZone(-11,		"NUT", "SST");
	
	public static readonly UTC_NEG_12: MillenniumTimeZone =		new MillenniumTimeZone(-12,		"BIT", "IDLW");
	
	private offset: number;
	
	private names: string[];
	
	private static offsetMap: Map<number, MillenniumTimeZone>;
	
	private constructor(offset: number, primaryName: string, ...names: string[]) {
		
		this.offset = offset;
		this.names = [primaryName, ...names];
		
		MillenniumTimeZone.addOffsetMapping(offset, this);
		
	}
	
	private static addOffsetMapping(offset: number, timezone: MillenniumTimeZone): void {
		
		if (MillenniumTimeZone.offsetMap === undefined) MillenniumTimeZone.offsetMap = new Map<number, MillenniumTimeZone>();
		
		MillenniumTimeZone.offsetMap.set(offset, timezone);
		
	}
	
	public static getTimezoneForOffset(offset: number): MillenniumTimeZone {
		
		return MillenniumTimeZone.offsetMap.get(offset);
		
	}
	
	public getOffset(): number {
		
		return this.offset;
		
	}
	
	public getPrimaryName(): string {
		
		return this.names[0];
		
	}
	
	public getAllNames(): string[] {
		
		return this.names;
		
	}
	
}