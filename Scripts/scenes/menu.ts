module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;

        /**
         * 
         */
        constructor() {
            super();
            
        }
        public Start():void {
            //add Menu Label
            this._menuLabel = new objects.Label("MENU SCENE","60px","Consolas","#000000",
            320,240);
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

            //scene updates happen here...
        }

        //event handler ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void{
            //Switch the scene
            // core.scene = config.Scene.PLAY;
            // core.changeScene();

            //for now change label txt to "clicked "
            this._menuLabel.text = "clicked!";
        }
       

    }
}