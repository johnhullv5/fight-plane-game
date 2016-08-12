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
        private _isColliding: boolean;
        public sound: createjs.AbstractSoundInstance;


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

        get halfHeight(): number {
            return this._height * 0.5;
        }

        get halfWidth(): number {
            return this._width * 0.5;
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
        get position(): Vector2 {
            return this._position;
        }
        set position(newposition: Vector2) {
            this._position = newposition;
        }

        get isColliding(): boolean {
            return this._isColliding;
        }

        set isColliding(newState: boolean) {
            this._isColliding = newState;

        }







        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++
        /**
         * 
         * Creates an instance of the GameObject
         */

        constructor(imageString: string) {
            super(core.assets.getResult(imageString));

            this._initialize(imageString);

            this.start();
        }
        private _initialize(imageString: string): void {
            this.name = imageString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            console.log("game object:x:" + this.x);
            this.position = new Vector2(this.x, this.y);
            this._isColliding = false;
            //console.log("position: x: "+this.position.getX());


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