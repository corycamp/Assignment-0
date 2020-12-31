function countOfAllBooleans(arr) {
  // Insert code here;
  var count = 0;
  var total = 0;
  while(count < arr.length){
  	if(typeof(arr[count]) == "boolean"){
  		total++;
  	}
  	count++;
  }
  return total;
}

// Do not edit this line;
module.exports = countOfAllBooleans;