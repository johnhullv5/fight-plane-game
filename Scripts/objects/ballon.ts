module objects {
    /**
     * this is the Ballon objects
     */
    export class Ballon extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLE++++++++++++++++++++++
        private _dx: number;
        private _width: number;
        private _height: number;

        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++
        get width(): number {
            return this._width;
        }
        set width(newwidth: number) {
            this._width = newwidth;
        }

        get height(): number {
            return this._height;
        }

        set height(newheight: number) {
            this._height = newheight;
        }
        //CONSTRUCTORS +++++++++++++++++++++++++++++++++++
        //create an instance of Sky
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));
            this.start();
        }

        //PRIVATE METHODS +++++++++++++++++++++++++++++++++++
        //reset the game objects and x and y  
        private _reset(): void {
            //this.x = -this.width;
            this.x = 700;
            //y=(-40,400) ok;
             this.y = -40 + Math.floor(Math.random() * 440); 
            // get the random y location
            //this.y = Math.floor((Math.random()*(480-(this.height * 0.5)))+(this.height*0.5))
        }
        //checks the objects have reached the bounds
        private _checkBounds(): void {
            if (this.x <= -1000) {
                this._reset();
            }

        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++ 
        //used to initialize the public propertise and private instance variables
        public start(): void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._reset();
            this._dx = -5;//5px per frame right.

        }

        // update the object every frame
        public update(): void {
            this.x += this._dx;
            this._checkBounds();
        }

    }
}