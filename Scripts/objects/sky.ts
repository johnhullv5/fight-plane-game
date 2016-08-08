module objects {
    export class Sky extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLE
        private _dx:number;

        constructor(imageString: string) {
            super(core.assets.getResult(imageString));
            this.start();
        }

        private _reset():void{
            this.x = 0;
        }

        private _checkBounds():void{
            if(this.x<=-1000)
            {
                this._reset();
            }
            
        }

        public start():void{
            this._reset();
            this._dx = -5;//5px per frame right.

        }
        

        public update():void{
            this.x+=this._dx;
            this._checkBounds();
        }

    }
}