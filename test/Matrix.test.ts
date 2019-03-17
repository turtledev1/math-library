import { expect } from "chai";
import { Matrix } from "../src/Matrix";

describe("Matrix", function () {
    const IDENTITY = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
    const MATRIX3_2 = new Matrix([[1, 2], [2, 3], [4, 5]]);
    const MATRIX3_2_STRING = "1 2\n2 3\n4 5";
    const MATRIX3_2_ADD = new Matrix([[2, 4], [4, 6], [8, 10]]);
    const MATRIX2_3 = new Matrix([[1, 2, 3], [4, 5, 6]]);
    const MATRIX3_2_MULTIPLY = new Matrix([[9, 12, 15], [14, 19, 24], [24, 33, 42]]);

    describe("constructor", function () {
        it("should throw an error if one row isn't the same length as the others", function () {
            let data = [[1, 2], [1, 2], [1, 2, 3], [1, 2]];

            let test = () => {
                new Matrix(data);
            }

            expect(test).to.throw;
        });
    });

    describe("toString", function () {
        it("should print each rows on different lines", function () {
            let str = MATRIX3_2.toString();

            expect(str).to.equal(MATRIX3_2_STRING);
        });

        it("should print the same when using the static alternative", function () {
            let str = Matrix.toString(MATRIX3_2);

            expect(str).to.equal(MATRIX3_2_STRING);
        });
    });

    describe("add", function () {
        it("should throw when trying to add two incompatible matrix sizes", function () {
            let test = () => {
                MATRIX2_3.add(MATRIX3_2);
            }

            expect(test).to.throw;
        });

        it("should correctly add two compatible matrices", function () {
            let result = MATRIX3_2.add(MATRIX3_2);

            expect(result).to.be.deep.equal(MATRIX3_2_ADD);
        });

        it("should add the same when using the static alternative", function () {
            let result = Matrix.add(MATRIX3_2, MATRIX3_2);

            expect(result).to.be.deep.equal(MATRIX3_2_ADD);
        });
    });

    describe("multiply", function () {
        it("should throw when trying to multiply two incompatible matrix sizes", function () {
            let test = () => {
                MATRIX2_3.multiply(MATRIX2_3);
            }

            expect(test).to.throw;
        });

        it("should correctly multiply two compatible matrices", function () {
            let result = MATRIX3_2.multiply(MATRIX2_3);

            expect(result).to.be.deep.equal(MATRIX3_2_MULTIPLY);
        });

        it("should multiply the same when using the static alternative", function () {
            let result = Matrix.multiply(MATRIX3_2, MATRIX2_3);

            expect(result).to.be.deep.equal(MATRIX3_2_MULTIPLY);
        });
    });

    describe("identity", function () {
        it("should return the identity of the right size", function () {
            let result = Matrix.identity(3);

            expect(result).to.be.deep.equal(IDENTITY);
        });
    });
});