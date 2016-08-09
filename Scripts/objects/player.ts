module objects {
    /**
     * this is the player object
     * 
     * 
     */
    export class Player extends objects.GameObject {



        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.start();
        }
        private _checkBounds(): void {
            //checkbounds to stop player from going outsides

            //check the upper bounds
            if (this.y <= (-25 + (this.height * 0.5))) {
                this.y = this.height * 0.5 - 25;
            }

            //check the lower bounds
            if (this.y > 510 - (this.height * 0.5)) {
                this.y = 510 - (this.height * 0.5);
            }


        }


        public start(): void {

            // set the x value to be fixed
            this.x = 50;


        }

        public update(): void {
            //player to follow the mouse
             this.position = new Vector2(this.x, this.y);
            //console.log("player update.");
            this.y = core.stage.mouseY;
             //console.log( this.height);
            this._checkBounds();
        }

    }
}