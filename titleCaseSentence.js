function titleCase(str) {
  var strArr = str.split(" ");
  for(var i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
  }
  return strArr.join(' ');
}
