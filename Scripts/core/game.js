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
    var over;
    var play;
    //asset manifest for images and sounds
    var assetData = [
        { id: "sky", src: "../../Assets/images/240106381793617835.jpg" },
        { id: "ballon", src: "../../Assets/images/ballon.gif" },
        { id: "player", src: "../../Assets/images/avantar.gif" },
        { id: "enemy", src: "../../Assets/images/cloud.gif" },
        { id: "thunder", src: "../../Assets/audio/Missle.wav" },
        { id: "yay", src: "../../Assets/audio/yay.ogg" },
        { id: "engine", src: "../../Assets/audio/propellerEngine.ogg" }
    ];
    var atlasData = {
        "images": [
            "../../Assets/images/atlas.png"
        ],
        "frames": [
            [1, 1, 240, 161, 0, 0, -13],
            [1, 164, 63, 71, 0, -93, -121],
            [66, 164, 184, 39, 0, -8, -11],
            [66, 205, 184, 39, 0, -8, -11],
            [243, 1, 129, 121, 0, 0, 0],
            [252, 124, 184, 39, 0, -8, -11],
            [252, 165, 184, 39, 0, -8, -11]
        ],
        "animations": {
            "avantar2": { "frames": [0] },
            "ballon1": { "frames": [1] },
            "exitButton": { "frames": [2] },
            "nextButton": { "frames": [3] },
            "cloud1": { "frames": [4] },
            "restartButton": { "frames": [5] },
            "startButton": { "frames": [6] }
        }
    };
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
        core.textureAtlas = new createjs.SpriteSheet(atlasData);
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