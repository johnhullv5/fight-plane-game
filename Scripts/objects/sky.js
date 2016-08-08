var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Sky = (function (_super) {
        __extends(Sky, _super);
        function Sky(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Sky.prototype._reset = function () {
            this.x = 0;
        };
        Sky.prototype._checkBounds = function () {
            if (this.x <= -1000) {
                this._reset();
            }
        };
        Sky.prototype.start = function () {
            this._reset();
            this._dx = -5; //5px per frame right.
        };
        Sky.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Sky;
    }(createjs.Bitmap));
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=sky.js.map