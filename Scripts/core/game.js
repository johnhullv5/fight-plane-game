/// <reference path="_reference.ts"/>
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    //score and lives variables
    core.score = 0;
    core.highScore = 0;
    core.lives = 3;
    var helloLabel;
    var startButton; // reference to our button class
    // declare scene variables
    var currentScene;
    var menu;
    var order;
    var over;
    var play;
    //asset manifest for images and sounds
    var assetData = [
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "nextButton", src: "../../Assets/images/nextButton.png" },
        { id: "exitButton", src: "../../Assets/images/exitButton.png" },
        { id: "sky", src: "../../Assets/images/240106381793617835.jpg" },
        { id: "ballon", src: "../../Assets/images/ballon.gif" },
        { id: "player", src: "../../Assets/images/avantar.gif" },
        { id: "enemy", src: "../../Assets/images/cloud.gif" },
        { id: "thunder", src: "../../Assets/audio/Missle.wav" },
        { id: "yay", src: "../../Assets/audio/yay.ogg" },
        { id: "engine", src: "../../Assets/audio/propellerEngine.ogg" }
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
            case config.Scene.ORDER:
                core.stage.removeAllChildren();
                order = new scenes.Instruction();
                currentScene = order;
                break;
            //show the PLAY Scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            //show the OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map