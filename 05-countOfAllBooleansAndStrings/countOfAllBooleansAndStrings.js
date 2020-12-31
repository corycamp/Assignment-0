function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var total = 0;
  var count = 0;

  while(count < arr.length){
  	if(typeof(arr[count]) == "boolean" || typeof(arr[count]) == "string"){
  		total++;
  	}
  	count++;
  }
  return total;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;