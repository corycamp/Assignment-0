class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    var numbers = nums;
    var present = false;
    var middle = Math.floor(numbers.length / 2);

    if(numbers.length == 1 && numbers[0] != target){
    	return false;
    } 
    if(numbers[middle] == target){
    	return true;
    }
    else if(numbers[middle] > target){
    	return this.binarySearch(numbers.slice(0,middle), target);
    }
    else if(numbers[middle] < target){
    	return this.binarySearch(numbers.slice(middle), target);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;