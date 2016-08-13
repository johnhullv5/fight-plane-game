var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * file name: Over.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Over scene
 * Revsion History: 0.1
 *
 *
 */
var scenes;
(function (scenes) {
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         *
         */
        function Over() {
            _super.call(this);
        }
        Over.prototype.Start = function () {
            //add Menu Label
            this._sky = new objects.Sky("sky");
            this.addChild(this._sky);
            this._gameOverLabel = new objects.Label("GAME OVER", "60px", "Consolas", "#000000", 320, 180, true);
            this.addChild(this._gameOverLabel);
            this._finalScoreLabel = new objects.Label("Score: " + core.score, "60px", "Consolas", "#FF0000", 320, 240, true);
            this.addChild(this._finalScoreLabel);
            //add start button 
            this._restartButton = new objects.Button("restartButton", 320, 420, true);
            this.addChild(this._restartButton);
            //start button event listener
            this._restartButton.on("click", this.__restartButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Over.prototype.Update = function () {
            this._sky.update();
            //scene updates happen here...
        };
        //event handler ++++++++++++++++
        Over.prototype.__restartButtonClick = function (event) {
            //Switch the scene
            core.lives = 3;
            core.score = 0;
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map