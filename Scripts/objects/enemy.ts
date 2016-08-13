
/**
 * file name: Enemy.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Enemy
 * Revsion History: 0.1
 * 
 * 
 */
module objects {
    /**
     * this is the Enemy objects
     */
    export class Enemy extends objects.GameObject {
        //PRIVATE INSTANCE VARIABLE++++++++++++++++++++++
        private _dx: number;
        private _dy: number;


        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++

        //CONSTRUCTORS +++++++++++++++++++++++++++++++++++
        //create an instance of Enemy
        constructor(imageString: string) {
            super(imageString);
            this.start();
        }

        //PRIVATE METHODS +++++++++++++++++++++++++++++++++++
        //reset the game objects and x and y  
        private _reset(): void {
            //this._dx = -10;
            this._dx = -(Math.floor(Math.random() * 5 + 5));//horizontal speed
            this._dy = Math.floor(Math.random() * 8 - 4);//vertical shift
            //this.x = -this.width;
            this.x = 700;
            //this.y = 100;
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
            if (this.y >= (480 - (this.height * 0.5))) {
                this._reset();
            }

            if (this.y <= (this.height * 0.5)) {
                this._reset();
            }


        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++ 
        //used to initialize the public propertise and private instance variables
        public start(): void {

            this._reset();
            //this._dx = -5;//5px per frame right.

        }

        // update the object every frame
        public update(): void {
            this.position = new Vector2(this.x, this.y);
            this.x += this._dx;
            this.y += this._dy;
            this._checkBounds();
        }

    }
}