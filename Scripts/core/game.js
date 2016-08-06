/// <reference path="_reference.ts"/>
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    var helloLabel;
    var startButton; // reference to our button class
    // declare scene variables
    var currentScene;
    var menu;
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
        //setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
    }
    function gameLoop() {
        //call the scene's update
        currentScene.Update();
        core.stage.update(); //refresh the stage;
    }
    function startButtonClick(event) {
        helloLabel.text = "clicked!";
    }
    function changeScene() {
        //launch Various Scenes
        switch (core.scene) {
            //show the MENU Scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            //show the PLAY Scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                //play = new scenes.Play();
                //currentScene = play;
                break;
            //show the OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                //over = new scenes.Over();
                //currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map