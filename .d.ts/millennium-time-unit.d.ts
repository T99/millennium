export declare class MillenniumTimeUnit {
    static readonly MILLISECOND: MillenniumTimeUnit;
    static readonly SECOND: MillenniumTimeUnit;
    static readonly MINUTE: MillenniumTimeUnit;
    static readonly HOUR: MillenniumTimeUnit;
    static readonly DAY: MillenniumTimeUnit;
    static readonly WEEK: MillenniumTimeUnit;
    static readonly MONTH: MillenniumTimeUnit;
    static readonly YEAR: MillenniumTimeUnit;
    static readonly DECADE: MillenniumTimeUnit;
    static readonly CENTURY: MillenniumTimeUnit;
    static readonly MILLENNIUM: MillenniumTimeUnit;
    private readonly singularName;
    private readonly pluralName;
    private readonly milliseconds;
    private constructor();
    getSingularName(): string;
    getPluralName(): string;
    getMilliseconds(): number;
}
