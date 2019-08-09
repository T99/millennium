"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MillenniumTimeZone {
    constructor(offset, primaryName, ...names) {
        this.offset = offset;
        this.names = [primaryName, ...names];
        MillenniumTimeZone.addOffsetMapping(offset, this);
    }
    static addOffsetMapping(offset, timezone) {
        if (MillenniumTimeZone.offsetMap === undefined)
            MillenniumTimeZone.offsetMap = new Map();
        MillenniumTimeZone.offsetMap.set(offset, timezone);
    }
    static getTimezoneForOffset(offset) {
        return MillenniumTimeZone.offsetMap.get(offset);
    }
    getOffset() {
        return this.offset;
    }
    getPrimaryName() {
        return this.names[0];
    }
    getAllNames() {
        return this.names;
    }
}
MillenniumTimeZone.UTC_POS_14 = new MillenniumTimeZone(+14, "LINT");
MillenniumTimeZone.UTC_POS_13_75 = new MillenniumTimeZone(+13.75, "CHADT");
MillenniumTimeZone.UTC_POS_13 = new MillenniumTimeZone(+13, "NZDT", "PHOT", "TKT", "TOT");
MillenniumTimeZone.UTC_POS_12_75 = new MillenniumTimeZone(+12.75, "CHAST");
MillenniumTimeZone.UTC_POS_12 = new MillenniumTimeZone(+12, "");
MillenniumTimeZone.UTC_POS_11 = new MillenniumTimeZone(+11, "");
MillenniumTimeZone.UTC_POS_10 = new MillenniumTimeZone(+10, "");
MillenniumTimeZone.UTC_POS_9 = new MillenniumTimeZone(+9, "");
MillenniumTimeZone.UTC_POS_8 = new MillenniumTimeZone(+8, "");
MillenniumTimeZone.UTC_POS_7 = new MillenniumTimeZone(+7, "");
MillenniumTimeZone.UTC_POS_6 = new MillenniumTimeZone(+6, "");
MillenniumTimeZone.UTC_POS_5 = new MillenniumTimeZone(+5, "");
MillenniumTimeZone.UTC_POS_4 = new MillenniumTimeZone(+4, "");
MillenniumTimeZone.UTC_POS_3 = new MillenniumTimeZone(+3, "");
MillenniumTimeZone.UTC_POS_2 = new MillenniumTimeZone(+2, "");
MillenniumTimeZone.UTC_POS_1 = new MillenniumTimeZone(+1, "BST", "CET", "DFT", "IST", "MET", "WAT", "WEST");
MillenniumTimeZone.UTC = new MillenniumTimeZone(0, "UTC", "GMT", "AZOST", "EGST", "WET");
MillenniumTimeZone.UTC_NEG_1 = new MillenniumTimeZone(-1, "AZOT", "CVT", "EGT");
MillenniumTimeZone.UTC_NEG_2 = new MillenniumTimeZone(-2, "BRST", "FNT", "GST", "PMDT", "UYST");
MillenniumTimeZone.UTC_NEG_2_5 = new MillenniumTimeZone(-2.5, "BRST", "FNT", "GST", "PMDT", "UYST");
MillenniumTimeZone.UTC_NEG_3 = new MillenniumTimeZone(-3, "ADT", "AMST", "ART", "BRT", "CLST", "FKST", "GFT", "PMST", "PYST", "ROTT", "SRT", "UYT");
MillenniumTimeZone.UTC_NEG_3_5 = new MillenniumTimeZone(-3.5, "NST", "NT");
MillenniumTimeZone.UTC_NEG_4 = new MillenniumTimeZone(-4, "AMT", "AST", "BOT", "CDT", "CLT", "COST", "ECT", "EDT", "FKT", "GYT", "PYT", "VET");
MillenniumTimeZone.UTC_NEG_5 = new MillenniumTimeZone(-5, "EST", "CDT", "ACT", "COT", "EASST", "ECT", "PET");
MillenniumTimeZone.UTC_NEG_6 = new MillenniumTimeZone(-6, "CST", "MDT", "EAST", "GALT");
MillenniumTimeZone.UTC_NEG_7 = new MillenniumTimeZone(-7, "MST", "PDT");
MillenniumTimeZone.UTC_NEG_8 = new MillenniumTimeZone(-8, "PST", "AKDT", "CIST");
MillenniumTimeZone.UTC_NEG_9 = new MillenniumTimeZone(-9, "AKST", "GAMT", "GIT", "HDT");
MillenniumTimeZone.UTC_NEG_9_5 = new MillenniumTimeZone(-9.5, "MART", "MIT");
MillenniumTimeZone.UTC_NEG_10 = new MillenniumTimeZone(-10, "HST", "CKT", "SDT", "TAHT");
MillenniumTimeZone.UTC_NEG_11 = new MillenniumTimeZone(-11, "NUT", "SST");
MillenniumTimeZone.UTC_NEG_12 = new MillenniumTimeZone(-12, "BIT", "IDLW");
exports.MillenniumTimeZone = MillenniumTimeZone;
//# sourceMappingURL=millennium-time-zone.js.map