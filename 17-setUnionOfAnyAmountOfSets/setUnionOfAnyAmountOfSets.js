function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let union = new Set();
	
  for(let set of args){
  	for(let each of set){
  		union.add(each);
  	}
  }  

return union;

}
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;