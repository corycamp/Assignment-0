class MySolution {
  countDownSum(num) {
    // Insert code here;
    var total;
    var count = num;
  	if(count == 1){
  		return count;
  	}
  		return count + this.countDownSum(count - 1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;