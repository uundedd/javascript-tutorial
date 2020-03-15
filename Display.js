setTimeout(() => {
  run();
}, 500);
class Display {
  constructor(width, height, withResolution , heightResolution, fps , renderEvent) {
    this.Width = width;
    this.Height = height;
    this.Resolution = resolution;
    this.resource = [];
    // this.colorRandom = colorRandom;
  }
  fillResource(resouce){
      this.resource  = resouce;
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
  runTestDisplay() {
    var result = [];
    for (var i = 0; i < n; i++) {
      result.push(new Array(m).colorRandom());
    }
    return result;
  }
  stopTestDisplay(){

  }
  on(){

  }
  off(){
      
  }
}
function run() {
  var rasterimage = new Image(1, 1, 100 ,100 ,24 , function(renderedDisplay){});    
  rasterimage.testdisplay();
}
