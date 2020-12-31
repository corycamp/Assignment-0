function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  var total = 0;
  var count = 0;
  var arr = nums;
  while(count < arr.length){
  	if(arr[count] < target){
  		total++;
  	}
  	count++;
  }
  return total;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;