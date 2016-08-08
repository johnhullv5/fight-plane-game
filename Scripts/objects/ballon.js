var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * this is the Ballon objects
     */
    var Ballon = (function (_super) {
        __extends(Ballon, _super);
        //CONSTRUCTORS +++++++++++++++++++++++++++++++++++
        //create an instance of Sky
        function Ballon(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Object.defineProperty(Ballon.prototype, "width", {
            //PUBLIC PROPERTIES++++++++++++++++++++++++++++++
            get: function () {
                return this._width;
            },
            set: function (newwidth) {
                this._width = newwidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Ballon.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newheight) {
                this._height = newheight;
            },
            enumerable: true,
            configurable: true
        });
        //PRIVATE METHODS +++++++++++++++++++++++++++++++++++
        //reset the game objects and x and y  
        Ballon.prototype._reset = function () {
            //this.x = -this.width;
            this.x = 700;
            //y=(-40,400) ok;
            this.y = -40 + Math.floor(Math.random() * 440);
            // get the random y location
            //this.y = Math.floor((Math.random()*(480-(this.height * 0.5)))+(this.height*0.5))
        };
        //checks the objects have reached the bounds
        Ballon.prototype._checkBounds = function () {
            if (this.x <= -1000) {
                this._reset();
            }
        };
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++ 
        //used to initialize the public propertise and private instance variables
        Ballon.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._reset();
            this._dx = -5; //5px per frame right.
        };
        // update the object every frame
        Ballon.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Ballon;
    }(createjs.Bitmap));
    objects.Ballon = Ballon;
})(objects || (objects = {}));
//# sourceMappingURL=ballon.js.map