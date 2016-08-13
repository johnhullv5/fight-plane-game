/// <reference path="../core/game.ts" />

/**
 * file name: Scene.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Scene container, generic for different scenes.
 * Revsion History: 0.1
 * 
 * 
 */



module objects {
    /**
     * this abtract scene class is used to creat individual scene
     */
    export abstract  class Scene extends createjs.Container {
        constructor() {
            super();

            this.Start();
        }

        /**
         * Add game objects to my scene;
         */

        public Start():void{
            core.stage.addChild(this);
        }

        /**
         * Updates Game objects in the Scene
         * @method Update
         * @return {void}
         */

        public Update():void{

        }
    }
}