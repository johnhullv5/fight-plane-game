var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * this class represents a generic Game Object used in the game.
     *
     *
     *
     */
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++
        /**
         *
         * Creates an instance of the GameObject
         */
        function GameObject(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this._initialize();
            this.start();
        }
        Object.defineProperty(GameObject.prototype, "width", {
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
        Object.defineProperty(GameObject.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newheight) {
                this._height = newheight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newname) {
                this._name = newname;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "postion", {
            get: function () {
                return this._position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "position", {
            set: function (newposition) {
                this._position = newposition;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.position = new objects.Vector2(this.x, this.y);
        };
        /**
         * This method is used to initialize public properties and
         * private instance variables
         *
         *
         */
        GameObject.prototype.start = function () {
        };
        GameObject.prototype.update = function () {
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map