/// <reference path="_reference.ts"/>


namespace core {





    //declare a reference to the Preloader
    export let assets: createjs.LoadQueue;

    //declare textureAtlas
    export let textureAtlas: createjs.SpriteSheet;


    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");

    // create a reference to a stage container 
    export let stage: createjs.Stage;

    //score and lives variables
    export let score: number = 0;
    export let highScore: number = 0;
    export let lives: number = 3;


    let helloLabel: objects.Label;
    let startButton: objects.Button;// reference to our button class

    // declare scene variables
    let currentScene: objects.Scene;
    export let scene: number;

    let menu: scenes.Menu;
    let over: scenes.Over;
    let play: scenes.Play;

    //asset manifest for images and sounds
    let assetData: objects.Asset[] = [

        { id: "sky", src: "../../Assets/images/240106381793617835.jpg" },

        { id: "thunder", src: "../../Assets/audio/Missle.wav" },
        { id: "yay", src: "../../Assets/audio/yay.ogg" },
        { id: "engine", src: "../../Assets/audio/propellerEngine.ogg" }
        // { id: "enemy", src: "../../Assets/images/cloud1.gif" },


    ];

    let atlasData = {

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
    function preload(): void {
        assets = new createjs.LoadQueue(); //instantiate the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }



    function init(): void {
        //console.log("Game start now   haha!");
        stage = new createjs.Stage(canvas); //instantiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);// create the event listener for the tick event

        textureAtlas = new createjs.SpriteSheet(atlasData);

        //setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    function gameLoop(): void {
        //call the scene's update
        currentScene.Update();
        stage.update(); //refresh the stage;
    }

    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }

    export function changeScene(): void {

        //launch Various Scenes
        switch (scene) {
            //show the MENU Scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            //show the PLAY Scene
            case config.Scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            //show the OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;


        }

    }


    window.addEventListener("load", preload);

}