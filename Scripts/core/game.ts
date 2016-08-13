/// <reference path="_reference.ts"/>


namespace core {





    //declare a reference to the Preloader
    export let assets: createjs.LoadQueue;


    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");

    // create a reference to a stage container 
    export let stage: createjs.Stage;

    //score and lives variables
    export let score:number = 0;
    export let highScore:number = 0;
    export let lives:number = 3;
    

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
        // { id: "enemy", src: "../../Assets/images/cloud1.gif" },


    ];
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