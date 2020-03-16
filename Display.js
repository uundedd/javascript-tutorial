class Display {
  constructor(
    width,
    height,
    withResolution,
    heightResolution,
    fps,
    renderEvent
  ) {
    this.Width = width;
    this.Height = height;
    this.withResolution = withResolution;
    this.heightResolution = heightResolution;
    this.resource = [];
    this.fps = fps;
    this.renderEvent = renderEvent;
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
   
  }
  makeColorfullDisplay() {
    var result = [];
     for (var i = 0; i < this.heightResolution; i++){
      var innerResult = [];
      result.push (innerResult) ;
     for (var j = 0; j < this.withResolution; j++){
     innerResult.push(makeRandomColor());
     }
     setTimeout(() => {
      var k = this.fps;
      if (k <= 0) {
        this.makeColorfullDisplay();
      }
       k -= k;
     }, 1000/this.fps);
    } 
    this.resource = result;
  }
  stopTestDisplay() {}
  on() {}
  off() {}
}

[
  [
    [],
    [],
    []
  ],
  [],
  [],
]