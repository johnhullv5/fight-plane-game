
/**
 * file name: Button.ts
 * author: Hao Jiang
 * Last modified by: Hao Jiang
 * description:  program define Button
 * Revsion History: 0.1
 * 
 * 
 */
module objects{
    export class Button extends createjs.Bitmap {
/**
 * 
 */
        constructor(imageString: string,x:number,y:number,isCentered:boolean){
            super(core.assets.getResult(imageString));
//"../../Assets/images/startButton.png"
            if(isCentered)
            {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover",this._mouseOver,this);
            this.on("mouseout",this._mouseOut,this);
        }

        private _mouseOver(event:createjs.MouseEvent):void{
            this.alpha = 0.7;

        }

        private _mouseOut(event:createjs.MouseEvent):void{
            this.alpha = 1.0;

        }
        
    }
}