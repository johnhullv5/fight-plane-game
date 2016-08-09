module objects {
    /**
     * this class represents a generic Game Object used in the game.
     * 
     * 
     * 
     */
    export abstract class GameObject extends createjs.Bitmap {

        //PRIVATE INSTANCE VARIABLES++++++++++++++++++
        private _width: number;
        private _height: number;
        private _name: string;
        private _position: Vector2;

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
        get name(): string {
            return this._name;
        }
        set name(newname: string) {
            this._name = newname;
        }
        get postion(): Vector2 {
            return this._position;
        }
        set position(newposition: Vector2) {
            this._position = newposition;
        }




        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++
        /**
         * 
         * Creates an instance of the GameObject
         */

        constructor(imageString: string) {
            super(core.assets.getResult(imageString));
            this._initialize();
            this.start();
        }
        private _initialize(): void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.position = new Vector2(this.x, this.y);


        }

        /**
         * This method is used to initialize public properties and 
         * private instance variables
         * 
         * 
         */

        public start(): void {

        }

        public update(): void {
           

        }


    }
}