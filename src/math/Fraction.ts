export class Fraction {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    private eval(): number {
        return this.numerator/this.denominator;
    }
}