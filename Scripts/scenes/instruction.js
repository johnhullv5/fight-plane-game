var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        /**
         *
         */
        function Instruction() {
            _super.call(this);
        }
        Instruction.prototype.Start = function () {
            this._sky = new objects.Sky("sky");
            this.addChild(this._sky);
            this._titleLabel = new objects.Label("Instruction", "40px", "Consolas", "#FF0000", 350, 150, true);
            this.addChild(this._titleLabel);
            //add Menu Label
            this._instructionLabel = new objects.Label("use the mouse the control the plane's \n\npositon, try to " +
                "avoid all clouds\n\n and collect more ballons", "20px", "Consolas", "#FFFF00", 700, 250, true);
            this.addChild(this._instructionLabel);
            //add start button 
            this._startButton = new objects.Button("startButton", 320, 420, true);
            this.addChild(this._startButton);
            //start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Instruction.prototype.Update = function () {
            this._sky.update();
            //scene updates happen here...
        };
        //event handler ++++++++++++++++
        Instruction.prototype._startButtonClick = function (event) {
            //Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map