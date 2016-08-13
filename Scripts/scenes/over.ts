/**
 * file name: Over.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Over scene
 * Revsion History: 0.1
 * 
 * 
 */
module scenes {
    export class Over extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES
        private _sky: objects.Sky;
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _finalScoreLabel: objects.Label;

        /**
         * 
         */
        constructor() {
            super();

        }
        public Start(): void {
            //add Menu Label
            this._sky = new objects.Sky("sky");
            this.addChild(this._sky);



            this._gameOverLabel = new objects.Label("GAME OVER", "60px", "Consolas", "#000000",
                320, 180, true);
            this.addChild(this._gameOverLabel);

            this._finalScoreLabel = new objects.Label("Score: " + core.score, "60px", "Consolas", "#FF0000",
                320, 240, true);

            this.addChild(this._finalScoreLabel);

            //add start button 
            this._restartButton = new objects.Button(
                "restartButton", 320, 420, true
            )
            this.addChild(this._restartButton);

            //start button event listener
            this._restartButton.on("click", this.__restartButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);

        }

        public Update(): void {
            this._sky.update();

            //scene updates happen here...
        }

        //event handler ++++++++++++++++

        private __restartButtonClick(event: createjs.MouseEvent): void {
            //Switch the scene
            core.lives = 3;
            core.score = 0;
            core.scene = config.Scene.PLAY;
            core.changeScene();

        }


    }
}