/// <reference path="_reference.ts"/>
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    var helloLabel;
    var startButton; // reference to our button class
    //asset manifest for images and sounds
    var assetData = [
        { id: "startButton", src: "../../Assets/images/startButton.png" }
    ];
    /**
     * this method preloads assets for the game.
     * @method preload
     * @returns {void}
     */
    function preload() {
        core.assets = new createjs.LoadQueue(); //instantiate the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    function init() {
        //console.log("Game start now   haha!");
        core.stage = new createjs.Stage(canvas); //instantiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create the event listener for the tick event
        main(); // call the main game function 
    }
    function gameLoop() {
        core.stage.update(); //refresh the stage;
    }
    function startButtonClick(event) {
        helloLabel.text = "clicked!";
    }
    /**
     * this is the main game function
     * @methdos: main
     * @returns {void}
     */
    function main() {
        helloLabel = new objects.Label("Hello World!", "40px", "Consolas", "#000000", 320, 240);
        core.stage.addChild(helloLabel);
        startButton = new objects.Button("startButton", 320, 340, true);
        core.stage.addChild(startButton);
        startButton.on("click", startButtonClick);
    }
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map