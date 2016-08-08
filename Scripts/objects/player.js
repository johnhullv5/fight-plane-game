var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * this is the player object
     *
     *
     */
    var Player = (function (_super) {
        __extends(Player, _super);
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++
        function Player(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Object.defineProperty(Player.prototype, "width", {
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
        Object.defineProperty(Player.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newheight) {
                this._height = newheight;
            },
            enumerable: true,
            configurable: true
        });
        Player.prototype._checkBounds = function () {
            //checkbounds to stop player from going outsides
            //check the upper bounds
            if (this.y <= (-25 + (this.height * 0.5))) {
                this.y = this.height * 0.5 - 25;
            }
            //check the lower bounds
            if (this.y > 510 - (this.height * 0.5)) {
                this.y = 510 - (this.height * 0.5);
            }
        };
        Player.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            // set the x value to be fixed
            this.x = 50;
        };
        Player.prototype.update = function () {
            //player to follow the mouse
            this.y = core.stage.mouseY;
            this._checkBounds();
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map