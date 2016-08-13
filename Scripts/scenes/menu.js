var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * file name: Menu.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Menu scene
 * Revsion History: 0.1
 *
 *
 */
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         *
         */
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.Start = function () {
            this._sky = new objects.Sky("sky");
            this.addChild(this._sky);
            //add Menu Label
            this._menuLabel = new objects.Label("fight plane", "60px", "Consolas", "#FFFF00", 320, 240, true);
            this.addChild(this._menuLabel);
            //add start button 
            this._startButton = new objects.Button("startButton", 320, 420, true);
            this.addChild(this._startButton);
            //start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Menu.prototype.Update = function () {
            this._sky.update();
            //scene updates happen here...
        };
        //event handler ++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            //Switch the scene
            core.scene = config.Scene.ORDER;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map