export class Fraction {
    private numerator: number;
    private denominator: number;

    /**
     * Represents a fraction
     * @constructor
     * @param {number} numerator the numerator of the fraction
     * @param {number} denominator the denominator of the fraction
     * @throws when the numerator or the denominator is not an integer
     * @throws when the denominator is zero
     */
    constructor(numerator: number, denominator: number) {
        if (!this.isInteger(numerator) || !this.isInteger(denominator))
            throw new Error("Numerator and denominator should be integers");

        if (denominator === 0)
            throw new Error("Denominator can't be 0");

        this.numerator = numerator;
        this.denominator = denominator;
    }

    /**
     * @returns {string} returns a string representation of the fraction
     */
    public toString(): string {
        return this.numerator + "/" + this.denominator;
    }

    /**
     * @returns {number} returns the real value of the fraction
     */
    public eval(): number {
        return this.numerator / this.denominator;
    }

    /**
     * Reduce the fraction. For example, 6/4 will become 3/2
     * @returns {Fraction} returns reduced fraction
     */
    public reduce(): Fraction {
        let gcd = this.getGreatestCommonDivisor(this.numerator, this.denominator);

        return new Fraction(this.numerator / gcd, this.denominator / gcd);
    }

    /**
     * Add another fraction to this one
     * @param {Fraction} fraction the fraction to add to the first one
     * @returns {Fraction} returns the new fraction
     */
    public add(fraction: Fraction): Fraction {
        let newFirstNumerator = this.numerator * fraction.denominator;
        let newSecondNumerator = fraction.numerator * this.denominator;
        let commonDivisor = this.denominator * fraction.denominator;

        let result = new Fraction(newFirstNumerator + newSecondNumerator, commonDivisor);

        return result.reduce();
    }

    /**
     * Multiply another fraction to this one
     * @param {Fraction} fraction the fraction to multiply to the first one
     * @returns {Fraction} returns the new fraction
     */
    public multiply(fraction: Fraction): Fraction {
        let result = new Fraction(this.numerator * fraction.numerator, this.denominator * fraction.denominator);

        return result.reduce();
    }

    private isInteger(number: number): boolean {
        return number % 1 === 0;
    }

    private getGreatestCommonDivisor(x: number, y: number): number {
        if (x === 0)
            return y;

        return this.getGreatestCommonDivisor(y % x, x);
    }

    /*--------------------------------------------------------------------------------
                 STATIC METHODS
    --------------------------------------------------------------------------------*/

    /**
     * Static alternative to toString
     * @param {Fraction} fraction the fraction to print
     * @returns {string} returns a string representation of the fraction
     */
    public static toString(fraction: Fraction): string {
        return fraction.toString();
    }

    /**
     * Static alternative to eval
     * @param {Fraction} fraction the fraction to eval
     * @returns {number} returns the real value of the fraction
     */
    public static eval(fraction: Fraction): number {
        return fraction.eval();
    }

    /**
     * Static alternative to reduce
     * @param {Fraction} fraction the fraction to reduce
     * @returns {Fraction} returns reduced fraction
     */
    public static reduce(fraction: Fraction): Fraction {
        return fraction.reduce();
    }

    /**
     * Static alternative to add
     * @param {Fraction} fraction1 the first fraction to add
     * @param {Fraction} fraction2 the fraction to add to the first one
     * @returns {Fraction} returns the new fraction
     */
    public static add(fraction1: Fraction, fraction2: Fraction): Fraction {
        return fraction1.add(fraction2);
    }

    /**
     * Static alternative to multiply
     * @param {Fraction} fraction1 the first fraction to multiply
     * @param {Fraction} fraction2 the fraction to multiply to the first one
     * @returns {Fraction} returns the new fraction
     */
    public static multiply(fraction1: Fraction, fraction2: Fraction): Fraction {
        return fraction1.multiply(fraction2);
    }
}