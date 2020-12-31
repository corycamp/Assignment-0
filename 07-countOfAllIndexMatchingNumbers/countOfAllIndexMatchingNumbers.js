function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  var total = 0;
  var count = 0;
  var arr = nums;
  while(count <= arr.length){
  	if(count == arr[count])
  		total++;
  	count++;
  }

  return total;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;