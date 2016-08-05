/// <reference path="_reference.ts"/>

// make a reference to the canvas element
let canvas:HTMLElement = document.getElementById("canvas");

// create a reference to a stage container 
let stage:createjs.Stage;

let helloLabel:createjs.Text;

function init():void{
    //console.log("Game start now   haha!");
    stage = new createjs.Stage(canvas); //instantiate the stage container
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick",gameLoop);// create the event listener for the tick event
    main();// call the main game function 
}

function gameLoop():void {
    helloLabel.rotation += 5;

    stage.update(); //refresh the stage;
}

function main():void{

    helloLabel = new createjs.Text("Hello World!","40px Consolas","#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth()* 0.9;
    helloLabel.regY = helloLabel.getMeasuredHeight()*0.9;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);

    helloLabel.text = "goodbye";

}

window.addEventListener("load",init);