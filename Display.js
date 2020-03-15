setTimeout(() => {
    run();
},
500);
class Image {
    constructor(width , height , resolution , colorRandom){
        this.Width = width;
        this.Height = height;
        this.Resolution = resolution;
        this.colorRandom = colorRandom;
    }
    colorRandom(){
        var hex = '#' + (function co(lor){ return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)]) && (lor.length == 6) ?  lor : co(lor); })('');
    }
    matrix(m, n) {
        var result = []
        for(var i = 0; i < n; i++) {
            result.push(new Array(m).colorRandom())
        }
        return result
    }
}
function run(){
    var rasterimage = new Image(1 ,1 , 100 , function(){});
    var m = rasterimage.width * rasterimage.resolution;
    var n = rasterimage.height * rasterimage.resolution;
}