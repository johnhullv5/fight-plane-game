module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES
        private _sky:objects.Sky;
        private _ballon:objects.Ballon;
        private _player:objects.Player;
        private _enemy:objects.Enemy;
        /**
         * 
         */
        constructor() {
            super();
            
        }
        public Start():void {
            //add play Label
            this._sky = new objects.Sky("sky");
            this.addChild(this._sky);

            this._ballon = new objects.Ballon("ballon");
            this.addChild(this._ballon);

            this._player = new objects.Player("player");
            this.addChild(this._player);

            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);

             // add this scene to the global scene container
             core.stage.addChild(this);

        }

        public Update():void{
            this._sky.update();
            this._ballon.update();
            this._player.update();
            this._enemy.update();
            //scene updates happen here...
        }

        //event handler ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void{
            //Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();


        }
       

    }
}