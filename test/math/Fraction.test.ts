import { expect } from "chai";
import { Fraction } from "../../src/main";

describe("Vector", function () {
    const SCALAR = 2;
    const FRACTION6_4 = new Fraction(6, 4);
    const FRACTION6_4_STRING = "6/4";
    const FRACTION6_4_REDUCED = new Fraction(3, 2);
    const FRACTION6_4_VALUE = 1.5;
    const FRACTION4_5 = new Fraction(4, 5);
    const ADDED_FRACTION = new Fraction(23, 10);
    const MULTIPLIED_FRACTION = new Fraction(6, 5);

    describe("constructor", function () {
        it("should throw if the numerator is not an integer", function () {
            let test = () => {
                new Fraction(3.5, 2);
            }

            expect(test).to.throw;
        });

        it("should throw if the denominator is not an integer", function () {
            let test = () => {
                new Fraction(3, 2.5);
            }

            expect(test).to.throw;
        });

        it("should throw if the denominator is zero", function () {
            let test = () => {
                new Fraction(3, 0);
            }

            expect(test).to.throw;
        });
    });

    describe("toString", function () {
        it("should return the fraction in the correct format", function () {
            let result = FRACTION6_4.toString();

            expect(result).to.be.equal(FRACTION6_4_STRING);
        });

        it("should print the same with the static alternative", function () {
            let result = Fraction.toString(FRACTION6_4);

            expect(result).to.be.equal(FRACTION6_4_STRING);
        });
    });

    describe("eval", function () {
        it("should return the right value", function () {
            let result = FRACTION6_4.eval();

            expect(result).to.be.equal(FRACTION6_4_VALUE);
        });

        it("should eval the same with the static alternative", function () {
            let result = Fraction.eval(FRACTION6_4);

            expect(result).to.be.equal(FRACTION6_4_VALUE);
        });
    });

    describe("reduce", function () {
        it("should return the reduced fraction", function () {
            let result = FRACTION6_4.reduce();

            expect(result).to.be.deep.equal(FRACTION6_4_REDUCED);
        });

        it("should reduce the same with the static alternative", function () {
            let result = Fraction.reduce(FRACTION6_4);

            expect(result).to.be.deep.equal(FRACTION6_4_REDUCED);
        });
    });

    describe("add", function () {
        it("should add the fractions correctly", function () {
            let result = FRACTION6_4.add(FRACTION4_5);

            expect(result).to.be.deep.equal(ADDED_FRACTION);
        });

        it("should add the same with the static alternative", function () {
            let result = Fraction.add(FRACTION6_4, FRACTION4_5);

            expect(result).to.be.deep.equal(ADDED_FRACTION);
        });
    });

    describe("multiply", function () {
        it("should multiply the fractions correctly", function () {
            let result = FRACTION6_4.multiply(FRACTION4_5);

            expect(result).to.be.deep.equal(MULTIPLIED_FRACTION);
        });

        it("should multiply the same with the static alternative", function () {
            let result = Fraction.multiply(FRACTION6_4, FRACTION4_5);

            expect(result).to.be.deep.equal(MULTIPLIED_FRACTION);
        });
    });
});