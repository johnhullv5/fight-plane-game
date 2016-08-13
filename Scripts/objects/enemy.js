var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * file name: Enemy.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Enemy
 * Revsion History: 0.1
 *
 *
 */
var objects;
(function (objects) {
    /**
     * this is the Enemy objects
     */
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++
        //CONSTRUCTORS +++++++++++++++++++++++++++++++++++
        //create an instance of Enemy
        function Enemy(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        //PRIVATE METHODS +++++++++++++++++++++++++++++++++++
        //reset the game objects and x and y  
        Enemy.prototype._reset = function () {
            //this._dx = -10;
            this._dx = -(Math.floor(Math.random() * 5 + 5)); //horizontal speed
            this._dy = Math.floor(Math.random() * 8 - 4); //vertical shift
            //this.x = -this.width;
            this.x = 700;
            //this.y = 100;
            //y=(-40,400) ok;
            this.y = -40 + Math.floor(Math.random() * 440);
            // get the random y location
            //this.y = Math.floor((Math.random()*(480-(this.height * 0.5)))+(this.height*0.5))
        };
        //checks the objects have reached the bounds
        Enemy.prototype._checkBounds = function () {
            if (this.x <= -1000) {
                this._reset();
            }
            if (this.y >= (480 - (this.height * 0.5))) {
                this._reset();
            }
            if (this.y <= (this.height * 0.5)) {
                this._reset();
            }
        };
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++ 
        //used to initialize the public propertise and private instance variables
        Enemy.prototype.start = function () {
            this._reset();
            //this._dx = -5;//5px per frame right.
        };
        // update the object every frame
        Enemy.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.x += this._dx;
            this.y += this._dy;
            this._checkBounds();
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map