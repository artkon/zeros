module.exports = function getZerosCount(number) {

  var maxPow = 0;
  var max = Math.pow(10, 8);

  //Вычисляем максимальную степень 5 которая влазит в number
  for(var i = 1; i <= max ; i++){
    if( number / Math.pow(5, i) >= 1 ){
      maxPow = i;    
    } else {
      break;
    }
  }

  var result = 0;

  for(var i = 1; i <= maxPow; ++i){
    result += Math.floor( number / Math.pow(5, i) );
  }
  
  return result;
}