module objects {
    /**
     * this is the Ballon objects
     */
    export class Ballon extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLE++++++++++++++++++++++
        private _dx: number;


        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++

        //CONSTRUCTORS +++++++++++++++++++++++++++++++++++
        //create an instance of Sky
        constructor(imageString: string) {
            super(imageString);
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

            this._reset();
            this._dx = -5;//5px per frame right.

        }

        // update the object every frame
        public update(): void {
            this.position = new Vector2(this.x, this.y);
            this.x += this._dx;
            this._checkBounds();
        }

    }
}