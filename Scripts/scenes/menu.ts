/**
 * file name: Menu.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Menu scene
 * Revsion History: 0.1
 * 
 * 
 */
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _sky:objects.Sky;

        /**
         * 
         */
        constructor() {
            super();
            
        }
        public Start():void {
            this._sky = new objects.Sky("sky");
            this.addChild(this._sky);

            //add Menu Label
            this._menuLabel = new objects.Label("fight plane","60px","Consolas","#FFFF00",
            320,240,true);
             this.addChild(this._menuLabel);

             //add start button 
             this._startButton = new objects.Button(
                 "startButton",320,420,true
             )
             this.addChild(this._startButton);

             //start button event listener
             this._startButton.on("click",this._startButtonClick,this);

             // add this scene to the global scene container
             core.stage.addChild(this);

        }

        public Update():void{
            this._sky.update();

            //scene updates happen here...
        }

        //event handler ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void{
            //Switch the scene
             core.scene = config.Scene.ORDER;
             core.changeScene();


        }
       

    }
}