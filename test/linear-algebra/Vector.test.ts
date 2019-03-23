import { expect } from "chai";
import { Vector } from "../../src/main";

describe("Vector", function () {
    const SCALAR = 2;
    const VECTOR3 = new Vector([1, 2, 3]);
    const VECTOR3_STRING = "(1, 2, 3)";
    const VECTOR3_ADD = new Vector([2, 4, 6]);
    const VECTOR3_MULTIPLY = 14;
    const VECTOR3_SCALAR = new Vector([2, 4, 6]);
    const VECTOR4 = new Vector([1, 2, 3, 4]);

    describe("getters", function () {
        it("should return the right dimension", function () {
            expect(VECTOR3.dimension).to.be.equal(3);
        });
    });

    describe("toString", function () {
        it("should return the correct format of the vector", function () {
            let result = VECTOR3.toString();

            expect(result).to.be.equal(VECTOR3_STRING);
        });

        it("should print the same with the static alternative", function () {
            let result = Vector.toString(VECTOR3);

            expect(result).to.be.equal(VECTOR3_STRING);
        });
    });

    describe("add", function () {
        it("should throw if the two vectors aren't the same size", function () {
            let test = () => {
                VECTOR3.add(VECTOR4);
            }

            expect(test).to.throw;
        });

        it("should add the two vectors correctly", function () {
            let result = VECTOR3.add(VECTOR3);

            expect(result).to.be.deep.equal(VECTOR3_ADD);
        });

        it("should add the same with the static alternative", function () {
            let result = Vector.add(VECTOR3, VECTOR3);

            expect(result).to.be.deep.equal(VECTOR3_ADD);
        });
    });

    describe("multiply", function () {
        it("should throw if the two vectors aren't the same size", function () {
            let test = () => {
                VECTOR3.multiply(VECTOR4);
            }

            expect(test).to.throw;
        });

        it("should multiply the vectors correctly", function () {
            let result = VECTOR3.multiply(VECTOR3);

            expect(result).to.be.equal(VECTOR3_MULTIPLY);
        });

        it("should multiply the same with the static alternative", function () {
            let result = Vector.multiply(VECTOR3, VECTOR3);

            expect(result).to.be.equal(VECTOR3_MULTIPLY);
        });
    });

    describe("multiplyByScalar", function () {
        it("should multiply all data by the scalar", function () {
            let result = VECTOR3.multiplyByScalar(SCALAR);

            expect(result).to.be.deep.equal(VECTOR3_SCALAR);
        });

        it("should multiply the same with the static alternative", function () {
            let result = Vector.multiplyByScalar(VECTOR3, SCALAR);

            expect(result).to.be.deep.equal(VECTOR3_SCALAR);
        });
    });
});