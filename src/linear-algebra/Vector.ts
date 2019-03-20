export class Vector {
    private _n: number;
    private _data: number[];

    constructor(data: number[]) {
        this._n = data.length;
        this._data = data;
    }

    public get dimension(): number {
        return this._n;
    }

    public toString(): string {
        let str: string = "";

        for (let i = 0; i < this._n; i++) {
            str += this._data[i];

            if (i !== this._n - 1)
                str += " ";
        }

        return str;
    }

    public add(vector: Vector): Vector {
        if (this._n !== vector._n)
            throw new Error("Incompatible size for add(). Tried to add " + this._n + " and " + vector._n + ".");

        let data: number[] = [];

        for (let i = 0; i < this._n; i++) {
            data[i] = this._data[i] + vector._data[i];
        }

        return new Vector(data);
    }

    public multiply(vector: Vector): number {
        if (this._n !== vector._n)
            throw new Error("Incompatible size for multiply(). Tried to multiply " + this._n + " and " + vector._n + ".");

        let result: number = 0;

        for (let i = 0; i < this._n; i++) {
            result += this._data[i] * vector._data[i];
        }

        return result;
    }
}