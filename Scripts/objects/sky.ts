/**
 * file name: Sky.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Sky background
 * Revsion History: 0.1
 * 
 * 
 */
module objects {
    /**
     * this is the sky objects
     */
    export class Sky extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLE++++++++++++++++++++++
        private _dx: number;
        //CONSTRUCTORS +++++++++++++++++++++++++++++++++++
        //create an instance of Sky
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));
            this.start();
        }

        //PRIVATE METHODS +++++++++++++++++++++++++++++++++++
        //reset the game objects
        private _reset(): void {
            this.x = 0;
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
            this.x += this._dx;
            this._checkBounds();
        }

    }
}