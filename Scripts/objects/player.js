var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * file name: Player.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Player
 * Revsion History: 0.1
 *
 *
 */
var objects;
(function (objects) {
    /**
     * this is the player object
     *
     *
     */
    var Player = (function (_super) {
        __extends(Player, _super);
        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++
        function Player(imageString) {
            _super.call(this, imageString);
            this.start();
        }
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
            //this.sound = createjs.Sound.play("engine",1,0,0,-1,0.7,0);
            //this.sound.loop = -1;
            // set the x value to be fixed
            this.x = 50;
        };
        Player.prototype.update = function () {
            //player to follow the mouse
            this.position = new objects.Vector2(this.x, this.y);
            //console.log("player update.");
            this.y = core.stage.mouseY;
            //console.log( this.height);
            this._checkBounds();
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map