/**
 * file name: Play.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Play scene
 * Revsion History: 0.1
 * 
 * 
 */
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES
        private _sky: objects.Sky;
        private _ballon: objects.Ballon;
        private _player: objects.Player;
        private _enemies: objects.Enemy[];
        private _collision: managers.Collision;
        private _scoreLable: objects.Label;
        private _livesLabel: objects.Label;
        private _engineSound: createjs.AbstractSoundInstance;
        /**
         * 
         */
        constructor() {
            super();

        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives:" + core.lives;
            this._scoreLable.text = "Score:" + core.score;
        }
        public Start(): void {
            //add play Label
            this._sky = new objects.Sky("sky");
            this.addChild(this._sky);

            this._ballon = new objects.Ballon("ballon");
            this.addChild(this._ballon);

            this._player = new objects.Player("player");
            this.addChild(this._player);

            this._engineSound =  createjs.Sound.play("engine");
            this._engineSound.loop = -1;

            this._enemies = new Array<objects.Enemy>();
            for (let count = 0; count < 3; count++) {
                this._enemies.push(new objects.Enemy("enemy"));
                this.addChild(this._enemies[count]);
            }
            //this.addChild(this._enemies);

            //include a collision manager.
            this._collision = new managers.Collision();

            // add this scene to the global scene container
            // core.stage.addChild(this);

            //add lives and score lables
            this._livesLabel = new objects.Label("lives:" + core.lives, "40px", "Consolas", "#FFFF00", 10, 5, false)
            this.addChild(this._livesLabel);

            this._scoreLable = new objects.Label("Score:" + core.score, "40px", "Consolas", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLable);

            core.stage.addChild(this);

        }

        public Update(): void {
            this._sky.update();
            this._ballon.update();
            this._player.update();
            this._collision.check(this._player, this._ballon);



            this._enemies.forEach(enemy => {
                enemy.update();
                this._collision.check(this._player, enemy);
            });

            this._updateScoreBoard();

            if (core.lives < 1) {
               
                this._engineSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();

            }

            //scene updates happen here...
        }

        //event handler ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            //Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();


        }


    }
}