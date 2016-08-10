module managers {
    export class Collision {
        constructor() {
            this.start();
        }

        public start() {

        }

        public check(player: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding

            if (objects.Vector2.distance(player.position, other.position) < (player.halfWidth + other.halfWidth)) {

                if ( !other.isColliding) {
                  
                    other.isColliding = true;
                    

                    //of the plane collides with cloud
                    if(other.name==="enemy")
                    {
                        createjs.Sound.play("thunder");
                    }

                    //of the plane collides with ballon
                     if(other.name==="ballon")
                    {
                        createjs.Sound.play("yay");
                    }




                }

            }
            else{

                other.isColliding = false;
            }


        }


        public update() {

        }
    }
}