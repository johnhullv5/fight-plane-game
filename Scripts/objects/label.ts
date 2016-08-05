module objects {
    /**
     * this is a generic label class.
     */
    export class Label extends createjs.Text {
        constructor(
            private labelString: string,
            private fontSize: string,
            private fontFamily: string,
            private fontColour: string,
            x: number,
            y: number
        ) {
            super(labelString, (fontSize + " " + fontFamily), fontColour);

            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;

            //assin the label coordinates
            this.x = x;
            this.y = y;
        }

    }

}