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
            _super.call(this, core.textureAtlas, imageString);
            this._initialize(imageString);
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
        Object.defineProperty(GameObject.prototype, "halfHeight", {
            get: function () {
                return this._height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "halfWidth", {
            get: function () {
                return this._width * 0.5;
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
        Object.defineProperty(GameObject.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (newposition) {
                this._position = newposition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "isColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newState) {
                this._isColliding = newState;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype._initialize = function (imageString) {
            this.name = imageString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            console.log("game object:x:" + this.x);
            this.position = new objects.Vector2(this.x, this.y);
            this._isColliding = false;
            //console.log("position: x: "+this.position.getX());
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
    }(createjs.Sprite));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map