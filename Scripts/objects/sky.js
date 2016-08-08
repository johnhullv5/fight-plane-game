var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * this is the sky objects
     */
    var Sky = (function (_super) {
        __extends(Sky, _super);
        //CONSTRUCTORS +++++++++++++++++++++++++++++++++++
        //create an instance of Sky
        function Sky(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        //PRIVATE METHODS +++++++++++++++++++++++++++++++++++
        //reset the game objects
        Sky.prototype._reset = function () {
            this.x = 0;
        };
        //checks the objects have reached the bounds
        Sky.prototype._checkBounds = function () {
            if (this.x <= -1000) {
                this._reset();
            }
        };
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++ 
        //used to initialize the public propertise and private instance variables
        Sky.prototype.start = function () {
            this._reset();
            this._dx = -5; //5px per frame right.
        };
        // update the object every frame
        Sky.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Sky;
    }(createjs.Bitmap));
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map