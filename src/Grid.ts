class Grid {
    _x: number;
    _y: number;
    
    _arr: TileNode[][]=[];
    _start: TileNode;
    _end: TileNode;
    public walkable: boolean = true;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._arr = new Array();
        for (var i: number = 0; i < this._x; i++) {
            this._arr[i] = new Array();
            for (var j: number = 0; j < this._y; j++) {
                this._arr[i][j] = new TileNode(i, j);
            }
        }
    }
    public setWalkable(j,i,state: number) {
        if(state==0){
            this._arr[i][j].walkable=false;
        }
        if(state==1){
            this._arr[i][j].walkable=true;
        }

    }
    public setEndPoint(x: number, y: number): void {
        this._end = this._arr[x][y] as TileNode;
    }

    public setStartPoint(x: number, y: number): void {
        this._start = this._arr[x][y] as TileNode;
    }
    public getStartPoint(): TileNode {
        return this._start;
    }

    public getEndPoint(): TileNode {
        return this._end;
    }
}