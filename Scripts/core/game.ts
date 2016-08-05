/// <reference path="_reference.ts"/>


namespace core {









    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");

    // create a reference to a stage container 
    export let stage: createjs.Stage;

    let helloLabel: objects.Label;
    let startButton: objects.Button;// reference to our button class

    function init(): void {
        //console.log("Game start now   haha!");
        stage = new createjs.Stage(canvas); //instantiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);// create the event listener for the tick event
        main();// call the main game function 
    }

    function gameLoop(): void {


        stage.update(); //refresh the stage;
    }

    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }
    /**
     * this is the main game function
     * @methdos: main
     * @returns {void} 
     */
    function main(): void {

        helloLabel = new objects.Label("Hello World!", "40px","Consolas", "#000000",320,240);
        
        stage.addChild(helloLabel);
        startButton = new objects.Button("../../Assets/images/startButton.png", 320, 340, true);
        stage.addChild(startButton);

        startButton.on("click", startButtonClick);





    }

    window.addEventListener("load", init);

}