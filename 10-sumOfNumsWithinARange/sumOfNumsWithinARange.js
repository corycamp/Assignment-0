function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  var total = 0;
  var count = 0;
  var cancel = false;
  var arr = nums;

  while(count < arr.length & cancel == false){
  	if(arr[count] == start){
  		for(var i = count; i < arr.length; i++){
  			total++;
  			if(arr[count] == end){
  				cancel = true;
  				break;
  			}
  		}
  	}
  	count++;
  }
  return total;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;