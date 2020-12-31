function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var total = 0;
  var arr = nums;
  var count = arr.length;

  	total = arr[0] + arr[count-1];

  	return total;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;