function isPalindrome(str) {

  var str1 = "";
  str = str.toLowerCase();
  
  for (var i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
  }
  
  return str1 === str;
}

//palindrome

var ans = isPalindrome("Nan")
console.log(ans);
