class Display {
  constructor(
    width,
    height,
    withResolution,
    heightResolution,
    fps,
    renderEvent
  ) {
    this.width = width;
    this.height = height;
    this.withResolution = withResolution;
    this.heightResolution = heightResolution;
    this.resource = [];
    this.fps = fps;
    this.renderEvent = renderEvent;
    this.off();
  }
  fillResource(resouce) {
    this.resource = resouce;
  }
  makeRandomColor() {
    return (
      "#" +
      (function co(lor) {
        return (lor += [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          "a",
          "b",
          "c",
          "d",
          "e",
          "f"
        ][Math.floor(Math.random() * 16)]) && lor.length == 6
          ? lor
          : co(lor);
      })("")
    );
  }
  runTestDisplay(){
    this.onTest = true;
    this.cycleTestDisplay();
  }
  cycleTestDisplay(){
    if (this.onTest){
    setTimeout(() => {
        this.makeResourceDisplay(this.makeRandomColor);
        this.cycleTestDisplay();
    }, 1000/this.fps);
    }
  }
  makeResourceDisplay(colorpixel) {
    var result = [];
     for (var i = 0; i < this.heightResolution; i++){
      var innerResult = [];
      result.push (innerResult) ;
     for (var j = 0; j < this.withResolution; j++){
     innerResult.push(colorpixel(i ,j));
     }
    } 
    this.resource = result;
  }
  stopTestDisplay() {
    this.onTest = false;
  }
  on() {
    this.makeResourceDisplay( (row , column) => {return "#ffffff"});
    this.power=true;
    this.render();
  }
  off() {
    this.makeResourceDisplay(function(row , column) {return "#000000"});
    this.power = false;
    this,this.renderEvent(this.resource , this.width , this.height);
  }
  render(){
    if (this.power){
    setTimeout(() => {
      this.renderEvent(this.resource , this.width , this.height);
      this.render();
    }, 1000/this.fps);
    }
  }
}