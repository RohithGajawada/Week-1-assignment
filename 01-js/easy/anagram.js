function sort(str1){
  var arr = str1.split('');
  arr = arr.sort();
  arr = arr.join();

  return arr;
}

function anagramCheck(str1, str2){
  if(sort(str1) == sort(str2)){
      return true;
  }
  else{
      return false;
  }
}

var ans = anagramCheck('abcc', 'ccba');
console.log(ans);