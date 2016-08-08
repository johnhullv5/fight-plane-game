var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         *
         */
        function Play() {
            _super.call(this);
        }
        Play.prototype.Start = function () {
            //add play Label
            this._sky = new objects.Sky("sky");
            this.addChild(this._sky);
            this._ballon = new objects.Ballon("ballon");
            this.addChild(this._ballon);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            this._sky.update();
            this._ballon.update();
            //scene updates happen here...
        };
        //event handler ++++++++++++++++
        Play.prototype._startButtonClick = function (event) {
            //Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map