function isPalindrome(str) {

  var str1 = "";
  str = str.toLowerCase();
  
  for (var i = str.length - 1; i >= 0; i--) {
    str1 += str[i];
  }
  
  return str1 === str;
}

function transform(str){
  var answer = "";

  for(var i = 0; i < str.length; i++){
    if(str[i] == " " || str[i] == "," || str[i] == "!"){

    }
    else{
      answer += str[i];
    }
  }

  return answer;
}


//palindrome

var ans1 = transform("Nan nan")
var ans_final = isPalindrome(ans1);
console.log(ans_final);
