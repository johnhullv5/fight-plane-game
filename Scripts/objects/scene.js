/// <reference path="../core/game.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * file name: Scene.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Scene container, generic for different scenes.
 * Revsion History: 0.1
 *
 *
 */
var objects;
(function (objects) {
    /**
     * this abtract scene class is used to creat individual scene
     */
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.Start();
        }
        /**
         * Add game objects to my scene;
         */
        Scene.prototype.Start = function () {
            core.stage.addChild(this);
        };
        /**
         * Updates Game objects in the Scene
         * @method Update
         * @return {void}
         */
        Scene.prototype.Update = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map