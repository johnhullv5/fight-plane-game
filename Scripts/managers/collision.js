var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.check = function (player, other) {
            //check to see if object is colliding
            if (objects.Vector2.distance(player.position, other.position) < (player.halfWidth + other.halfWidth)) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    //of the plane collides with cloud
                    if (other.name === "enemy") {
                        createjs.Sound.play("thunder");
                        core.lives -= 1;
                    }
                    //of the plane collides with ballon
                    if (other.name === "ballon") {
                        createjs.Sound.play("yay");
                        core.score += 100;
                        // test to see if the buloon dispear
                        other.visible = false;
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        };
        Collision.prototype.update = function () {
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map