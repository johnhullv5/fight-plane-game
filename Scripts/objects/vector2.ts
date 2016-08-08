module objects {
    /**
     * this class extends the createjs point class
     * 
     */
    export class Vector2 extends createjs.Point {
        constructor(x: number = 0, y: number = 0) {
            super(x, y);
        }


        /**
         * 
         * this method returns the distance between vector2 objectes.(a and b)
         * 
         */
        public static distance(a: Vector2, b: Vector2): number {
            return Math.floor(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)));
        }


    }
}