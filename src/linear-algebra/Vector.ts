export class Vector {
    private _n: number;
    private _data: number[];

    /**
     * Represents a Vector
     * @constructor
     * @param {number[]} data an array forming the vector. eg. [1, 2]
     */
    constructor(data: number[]) {
        this._n = data.length;
        this._data = data;
    }

    /**
     * @returns {number} returns the number dimensions of the vector
     */
    public get dimension(): number {
        return this._n;
    }

    /**
     * @returns {string} returns a string representation of the vector
     */
    public toString(): string {
        let str: string = "(";

        for (let i = 0; i < this._n; i++) {
            str += this._data[i];

            if (i !== this._n - 1)
                str += ", ";
        }

        return str + ")";
    }

    /**
     * Add another vector to this one. Vectors must be the same size
     * @param {Vector} vector the vector to add to the first one
     * @returns {Vector} returns the new vector
     * @throws when the two vectors are of incompatible size
     */
    public add(vector: Vector): Vector {
        if (this._n !== vector._n)
            throw new Error("Incompatible size for add(). Tried to add " + this._n + " and " + vector._n + ".");

        let data: number[] = [];

        for (let i = 0; i < this._n; i++) {
            data[i] = this._data[i] + vector._data[i];
        }

        return new Vector(data);
    }

    /**
     * Mutiply another vector to this one. Vectors must be the same size
     * @param {Vector} vector the vector to multiply to the first one
     * @returns {number} returns the product of the two vectors
     * @throws when the two vectors are of incompatible size
     */
    public multiply(vector: Vector): number {
        if (this._n !== vector._n)
            throw new Error("Incompatible size for multiply(). Tried to multiply " + this._n + " and " + vector._n + ".");

        let result: number = 0;

        for (let i = 0; i < this._n; i++) {
            result += this._data[i] * vector._data[i];
        }

        return result;
    }

    /**
     * Mutiply the vector by a scalar
     * @param {number} scalar the scalar to multiply the vector by
     * @returns {Vector} returns the new vector
     */
    public multiplyByScalar(scalar: number): Vector {
        let data: number[] = [];

        for (let i = 0; i < this._n; i++) {
            data[i] = this._data[i] * scalar;;
        }

        return new Vector(data);
    }

    /*--------------------------------------------------------------------------------
                STATIC METHODS
    --------------------------------------------------------------------------------*/

    /**
     * Static alternative to toString
     * @returns {string} returns a string representation of the vector
     */
    public static toString(vector: Vector): string {
        return vector.toString();
    }

    /**
     * Static alternative to add. Vectors must be the same size
     * @param {Vector} vector1 the first vector to add
     * @param {Vector} vector2 the second vector to add
     * @returns {Vector} returns the new vector
     * @throws when the two vectors are of incompatible size
     */
    public static add(vector1: Vector, vector2: Vector): Vector {
        return vector1.add(vector2);
    }

    /**
     * Static alternative to multiply. Vectors must be the same size
     * @param {Vector} vector1 the first vector to multiply
     * @param {Vector} vector2 the second vector to multiply
     * @returns {number} returns the product of the two vectors
     * @throws when the two vectors are of incompatible size
     */
    public static multiply(vector1: Vector, vector2: Vector): number {
        return vector1.multiply(vector2);
    }

    /**
     * Static alternative to multiplyByScalar
     * @param {Vector} vector the vector to multiply by the scalar
     * @param {number} scalar the scalar to multiply the vector by
     * @returns {Vector} returns the new vector
     */
    public static multiplyByScalar(vector: Vector, scalar: number): Vector {
        return vector.multiplyByScalar(scalar);
    }
}