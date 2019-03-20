export class Matrix {
    private _n: number;
    private _m: number;
    private _data: number[][];

    /**
     * Represents a matrix
     * @constructor
     * @param {number[][]} data an array of array forming the matrix. eg. [ [1, 2], [3, 4] ]
     * @throws when one row isn't the same size as the others
     */
    constructor(data: number[][]) {
        if (!this.areAllRowsSameLength(data))
            throw new Error("Rows have to be the same length");

        this._data = data;
        this._n = data.length;
        this._m = data[0].length;
    }

    /**
     * @returns {number} returns the number of rows in the matrix
     */
    public get n(): number {
        return this._n
    }

    /**
     * @returns {number} returns the number of columns in the matrix
     */
    public get m(): number {
        return this._m;
    }

    /**
     * toString method
     * @returns {string} returns a string representation of the matrix
     */
    public toString(): string {
        let str: string = "";

        for (let i = 0; i < this._n; i++) {
            for (let j = 0; j < this._m; j++) {
                str += this._data[i][j];
                if (j !== this._m - 1)
                    str += " ";
            }
            if (i !== this._n - 1)
                str += "\n";
        }

        return str;
    }

    /**
     * Add another matrix to this one. Matrices must be the same size
     * @param {Matrix} secondMatrix the matrix to add to the first one
     * @returns {Matrix} returns the new matrix
     * @throws when the two matrices are of incompatible size
     */
    public add(secondMatrix: Matrix) {
        if (this._n !== secondMatrix._n || this._m !== secondMatrix._m)
            throw new Error("Incompatible size for add(). Tried to add " + this._n + "x" + this._m + " and " + secondMatrix._n + "x" + secondMatrix._m + ".");

        let data: number[][] = [];

        for (let i = 0; i < this._n; i++) {
            data[i] = [];
            for (let j = 0; j < this._m; j++) {
                data[i][j] = this._data[i][j] + secondMatrix._data[i][j];
            }
        }

        return new Matrix(data);
    }

    /**
     * Mutiply another matrix to this one. If first matrix is of size n by m, second matrix must be of size m by n.
     * @param {Matrix} secondMatrix the matrix to multiply to the first one
     * @returns {Matrix} returns the new matrix
     * @throws when the two matrices are of incompatible size
     */
    public multiply(secondMatrix: Matrix): Matrix {
        if (this._m !== secondMatrix._n)
            throw new Error("Incompatible size for multiply(). Tried to multiply " + this._n + "x" + this._m + " and " + secondMatrix._n + "x" + secondMatrix._m + ".");

        let data: number[][] = [];

        for (let i = 0; i < this._n; i++) {
            data[i] = [];
            for (let j = 0; j < secondMatrix._m; j++) {
                data[i][j] = 0;
                for (let k = 0; k < this._m; k++) {
                    data[i][j] += this._data[i][k] * secondMatrix._data[k][j];
                }
            }
        }

        return new Matrix(data);
    }

    /**
     * Mutiply the matrix by a scalar
     * @param {number} scalar the scalar to multiply the matrix by
     * @returns {Matrix} returns the new matrix
     */
    public multiplyByScalar(scalar: number): Matrix {
        let data: number[][] = [];

        for (let i = 0; i < this._n; i++) {
            data[i] = [];
            for (let j = 0; j < this._m; j++) {
                data[i][j] = this._data[i][j] * scalar;
            }
        }

        return new Matrix(data);
    }

    /**
     * Transpose the matrix
     * @returns {Matrix} returns the transpose of the matrix
     */
    public transpose(): Matrix {
        let data: number[][] = [];

        for(let j = 0; j < this._m; j++) {
            data[j] = [];
            for(let i = 0; i < this._n; i++) {
                data[j][i] = this._data[i][j];
            }
        }

        return new Matrix(data);
    }

    /**
     * Check if the matrix is a square matrix
     * @returns {boolean} returns true if the matrix is a square matrix
     */
    public isSquare(): boolean {
        return this._n === this._m;
    }

    private areAllRowsSameLength(data: number[][]): boolean {
        let length0 = data[0].length;
        for (let row of data) {
            if (length0 !== row.length)
                return false;
        }
        return true;
    }

/*--------------------------------------------------------------------------------
            STATIC METHODS
--------------------------------------------------------------------------------*/

    /**
     * Create the identity matrix of size m
     * @param {number} size the size of the identity matrix
     * @returns {Matrix} returns the new matrix
     */
    public static identity(size: number): Matrix {
        let data: number[][] = [];

        for (let i = 0; i < size; i++) {
            data[i] = [];

            for (let j = 0; j < size; j++) {
                if (i === j)
                    data[i][j] = 1;
                else
                    data[i][j] = 0;
            }
        }

        return new Matrix(data);
    }

    /**
     * Static alternative to toString
     * @param {Matrix} matrix the matrix to stringify
     * @returns {string} returns a string representation of the matrix
     */
    public static toString(matrix: Matrix): string {
        return matrix.toString();
    }

    /**
     * Static alternative to add. Matrices must be the same size
     * @param {Matrix} matrix1 the first matrix
     * @param {Matrix} matrix2 the matrix to add to the first one
     * @returns {Matrix} returns the new matrix
     * @throws when the two matrices are of incompatible size
     */
    public static add(matrix1: Matrix, matrix2: Matrix): Matrix {
        return matrix1.add(matrix2);
    }

    /**
     * Static alternative to multiply. If first matrix is of size n by m, second matrix must be of size m by n.
     * @param {Matrix} matrix1 the first matrix
     * @param {Matrix} matrix2 the matrix to multiply to the first one
     * @returns {Matrix} returns the new matrix
     * @throws when the two matrices are of incompatible size
     */
    public static multiply(matrix1: Matrix, matrix2: Matrix): Matrix {
        return matrix1.multiply(matrix2);
    }

    /**
     * Static alternative to multiplyByScalar
     * @param {Matrix} matrix the matrix to multiply by the scalar
     * @param {number} scalar the scalar to multiply the matrix by
     * @returns {Matrix} returns the new matrix
     */
    public static multiplyByScalar(matrix: Matrix, scalar: number): Matrix {
        return matrix.multiplyByScalar(scalar);
    }

    /**
     * Static alternative to transpose
     * @param {Matrix} matrix the matrix to transpose
     * @returns {Matrix} returns the transpose of the matrix
     */
    public static transpose(matrix: Matrix): Matrix {
        return matrix.transpose();
    }

    /**
     * Static alternative to isSquare
     * @param {Matrix} matrix the matrix to transpose
     * @returns {boolean} returns true if the matrix is a square matrix
     */
    public static isSquare(matrix: Matrix): boolean {
        return matrix.isSquare();
    }
}