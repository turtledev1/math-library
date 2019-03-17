export class Matrix {
    private _n: number;
    private _m: number;
    private _data: number[][];

    constructor(data: number[][]) {
        if (!this.areAllRowsSameLength(data))
            throw new Error("Rows have to be the same length");

        this._data = data;
        this._n = data.length;
        this._m = data[0].length;
    }

    public toString(): string {
        let str: string = "";

        for (let row of this._data) {
            for (let num of row) {
                str += num + " ";
            }
            str += "\n";
        }

        return str;
    }

    public add(secondMatrix: Matrix) {
        if (this._n !== secondMatrix._n || this._m !== secondMatrix._m)
            throw new Error("Incompatible size for add(). Tried to add " + this._n + "x" + this._m + " and " + secondMatrix._n + "x" + secondMatrix._m + ".");

        let newData: number[][] = [];

        for (let i = 0; i < this._n; i++) {
            newData[i] = [];
            for (let j = 0; j < this._m; j++) {
                newData[i][j] = this._data[i][j] + secondMatrix._data[i][j];
            }
        }

        return new Matrix(newData);
    }

    public multiply(secondMatrix: Matrix) {
        if (this._m !== secondMatrix._n)
            throw new Error("Incompatible size for multiply(). Tried to multiply " + this._n + "x" + this._m + " and " + secondMatrix._n + "x" + secondMatrix._m + ".");

        let newData: number[][] = [];

        for (let i = 0; i < this._n; i++) {
            newData[i] = [];
            for (let j = 0; j < secondMatrix._m; j++) {
                newData[i][j] = 0;
                for (let k = 0; k < this._m; k++) {
                    newData[i][j] += this._data[i][k] * secondMatrix._data[k][j];
                }
            }
        }

        return new Matrix(newData);
    }

    private areAllRowsSameLength(data: number[][]): boolean {
        let length0 = data[0].length;
        for (let row of data) {
            if (length0 !== row.length)
                return false;
        }
        return true;
    }

    //static methods
    public static toString(matrix: Matrix): string {
        return matrix.toString();
    }

    public static add(matrix1: Matrix, matrix2: Matrix): Matrix {
        return matrix1.add(matrix2);
    }

    public static multiply(matrix1: Matrix, matrix2: Matrix): Matrix {
        return matrix1.multiply(matrix2);
    }
}