import { expect } from "chai";
import { Vector } from "../../src/main";

describe("Vector", function () {
    const SCALAR = 2;
    const VECTOR3 = new Vector([1, 2, 3]);
    const VECTOR4 = new Vector([1, 2, 3, 4]);

    describe("getters", function () {
        it("should return the right dimension", function () {
            expect(VECTOR3.dimension).to.be.equal(3);
        });
    });
});