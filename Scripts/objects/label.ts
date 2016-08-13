
/**
 * file name: Label.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Label
 * Revsion History: 0.1
 * 
 * 
 */
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
            , isCentered: boolean
        ) {
            super(labelString, (fontSize + " " + fontFamily), fontColour);
            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }


            //assin the label coordinates
            this.x = x;
            this.y = y;
        }

    }

}