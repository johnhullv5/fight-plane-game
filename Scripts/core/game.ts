/// <reference path="_reference.ts"/>


namespace core {





    //declare a reference to the Preloader
    export let assets: createjs.LoadQueue;


    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");

    // create a reference to a stage container 
    export let stage: createjs.Stage;

    let helloLabel: objects.Label;
    let startButton: objects.Button;// reference to our button class

    // declare scene variables
    let currentScene: objects.Scene;
    export let scene: number;

    let menu :scenes.Menu;

    //asset manifest for images and sounds
    let assetData = [
        { id: "startButton", src: "../../Assets/images/startButton.png" }
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
                //play = new scenes.Play();
                //currentScene = play;
                break;
            //show the OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                //over = new scenes.Over();
                //currentScene = over;
                break;


        }

    }


    window.addEventListener("load", preload);

}