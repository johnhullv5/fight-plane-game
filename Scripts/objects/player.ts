module objects {
    /**
     * this is the player object
     * 
     * 
     */
    export class Player extends createjs.Bitmap {

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
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(core.assets.getResult(imageString));

            this.start();
        }
        private _checkBounds(): void {
            //checkbounds to stop player from going outsides

            //check the upper bounds
            if(this.y<=(0+(this.height * 0.5)))
            {
                this.y = this.height * 0.5;
            }

            //check the lower bounds
            if(this.y>480 - (this.height * 0.5))
            {
                this.y = 480 - (this.height * 0.5);
            }
            
            
        }


        public start(): void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            // set the x value to be fixed
            this.x = 50;
            

        }

        public update(): void {
            //player to follow the mouse
            this.y = core.stage.mouseY;
            this._checkBounds();
        }

    }
}