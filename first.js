// writed by mahmood mirkhalili
setTimeout(() => {
  run()
}, 3000);

function run(){
  var unknownValue ; 
  var firstValue = 'name' ; 
  var sercoundValue = 1 ; 
  var thirdValue = false ; 
  var forthValue = ["morteza" , 9000 , false ] ; 
  var fiveValue = {
    name : 'ali' , 
    family : 'mirkhalili' , 
    age : 41 , 
    isMan : true , 
    father : {
      name : 'ahmad' , 
      family : 'mirkhalili' , 
      age : 76
    },
    child : [
      {
        name : 'mahmood' , 
        family : 'mirkhalili' , 
        age :12 
      }
    ]
  }
  console.log(fiveValue[firstValue]);
  console.log(forthValue[sercoundValue]) 
}