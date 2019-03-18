export class Vector {
    private _n: number;
    private _data: number[];

    constructor(data: number[]) {
        this._n = data.length;
        this._data = data;
    }

    public toString(): string {
        let str: string = "";

        for(let i = 0; i < this._n; i++) {
            str += this._data[i];

            if(i !== this._n - 1)
                str += " ";
        }

        return str;
    }

    public add(vector: Vector): Vector {
        let data: number[] = [];

        for(let i = 0; i < this._n; i++) {
            data[i] = this._data[i] + vector._data[i];
        }

        return new Vector(data);
    }
}