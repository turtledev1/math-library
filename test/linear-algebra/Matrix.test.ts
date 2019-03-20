import { expect } from "chai";
import { Matrix } from "../../src/main";

describe("Matrix", function () {
    const SCALAR = 2;
    const IDENTITY = new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
    const MATRIX3_2 = new Matrix([[1, 2], [2, 3], [4, 5]]);
    const MATRIX3_2_STRING = "1 2\n2 3\n4 5";
    const MATRIX3_2_TRANSPOSE = new Matrix([[1, 2, 4], [2, 3, 5]]);
    const MATRIX3_2_ADD = new Matrix([[2, 4], [4, 6], [8, 10]]);
    const MATRIX3_2_SCALAR = new Matrix([[2, 4], [4, 6], [8, 10]]);
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

    describe("getters", function () {
        it("should return the correct numbers of rows", function () {
            expect(MATRIX3_2.n).to.be.equal(3);
        });
        
        it("should return the correct numbers of columns", function () {
            expect(MATRIX3_2.m).to.be.equal(2);
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

    describe("multiplyByScalar", function () {
        it("should multiply all members by the scalar", function () {
            let result = MATRIX3_2.multiplyByScalar(SCALAR);

            expect(result).to.be.deep.equal(MATRIX3_2_SCALAR);
        });

        it("should multiply the same when using the static alternative", function () {
            let result = Matrix.multiplyByScalar(MATRIX3_2, SCALAR);

            expect(result).to.be.deep.equal(MATRIX3_2_SCALAR);
        });
    });

    describe("transpose", function () {
        it("should return the transpose of the matrix", function () {
            let result = MATRIX3_2.transpose();

            expect(result).to.be.deep.equal(MATRIX3_2_TRANSPOSE);
        });

        it("should transpose the same when using the static alternative", function () {
            let result = Matrix.transpose(MATRIX3_2);

            expect(result).to.be.deep.equal(MATRIX3_2_TRANSPOSE);
        });
    });

    describe("isSquare", function () {
        it("should return false when the matrix is not square", function () {
            let result = MATRIX3_2.isSquare();

            expect(result).to.be.false;
        });

        it("should return true when the matrix is square", function () {
            let result = IDENTITY.isSquare();

            expect(result).to.be.true;
        });

        it("should works the same when using the static alternative", function () {
            let result = Matrix.isSquare(IDENTITY);

            expect(result).to.be.true;
        });
    });

    describe("identity", function () {
        it("should return the identity of the right size", function () {
            let result = Matrix.identity(3);

            expect(result).to.be.deep.equal(IDENTITY);
        });
    });
});