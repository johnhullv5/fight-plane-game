/**
 * file name: scene.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description: main program define major scenes
 * Revsion History: 0.1
 *
 *
 */
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.ORDER = 1;
        Scene.PLAY = 2;
        Scene.OVER = 3;
        return Scene;
    }());
    config.Scene = Scene;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map