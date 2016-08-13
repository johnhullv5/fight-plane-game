module scenes {
    export class Instruction extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES
        private _titleLabel: objects.Label;
        private _instructionLabel: objects.Label;
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

            this._titleLabel = new objects.Label("Instruction","40px","Consolas","#FF0000",
            350,150,true);
             this.addChild(this._titleLabel);

            //add Menu Label
            this._instructionLabel = new objects.Label("use the mouse the control the plane's \n\npositon, try to "+
            "avoid all clouds\n\n and collect more ballons","20px","Consolas","#FFFF00",
            700,250,true);
             this.addChild(this._instructionLabel);

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
             core.scene = config.Scene.PLAY;
             core.changeScene();


        }
       

    }
}