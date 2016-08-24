function findLongestWord(str) {
  var longest = "";
  var strArr = str.split(" ");
  for(var i = 0; i < strArr.length; i++){
    if(longest.length < strArr[i].length){
      longest = strArr[i];
    }
  }
  return longest.length;
}
