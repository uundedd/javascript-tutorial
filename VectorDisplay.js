//Wirte by SAM
//Sample for Drawing line

class VectorDisplay extends Display {
    constructor(
        width,
        height,
        withResolution,
        heightResolution,
        fps,
        renderEvent
    ){
        super(width, height, withResolution, heightResolution, fps, renderEvent);
        
    }
    makeRasterResoucrFramVector(lines){
        this.makeResourceDisplay( (row , column) => {return "#ffffff"});
        for (const line of lines) {
            var previousPoint ; 
          for (const point of line) {
            if (previousPoint){  
                this.makeDrawLine(previousPoint , point);
            }
              previousPoint = point ;
          }  
        }
    }
}
