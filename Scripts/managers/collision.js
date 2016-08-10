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
                    }
                    //of the plane collides with ballon
                    if (other.name === "ballon") {
                        createjs.Sound.play("yay");
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