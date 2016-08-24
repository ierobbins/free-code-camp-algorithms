function largestOfFour(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    longest = arr[i][0];
    for(var j = 0; j < arr[i].length; j++){
      if(longest < arr[i][j]){
        longest = arr[i][j];
      }
    }
    newArr.push(longest);
  }
  return newArr;
}
