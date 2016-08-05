/// <reference path="_reference.ts"/>
// make a reference to the canvas element
var canvas = document.getElementById("canvas");
// create a reference to a stage container 
var stage;
var helloLabel;
function init() {
    //console.log("Game start now   haha!");
    stage = new createjs.Stage(canvas); //instantiate the stage container
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop); // create the event listener for the tick event
    main(); // call the main game function 
}
function gameLoop() {
    helloLabel.rotation += 5;
    stage.update(); //refresh the stage;
}
function main() {
    helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.9;
    helloLabel.regY = helloLabel.getMeasuredHeight() * 0.9;
    helloLabel.x = 320;
    helloLabel.y = 240;
    stage.addChild(helloLabel);
    helloLabel.text = "goodbye";
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map