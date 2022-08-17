/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
// function descendNum(StartNum) {
//   console.log(StartNum);
 
//   let NextNum = StartNum - 1;
 
//   if (NextNum > 0) {
     
//       descendNum(NextNum);
//   }
 
// }

// descendNum(10);


let reverse = function(str) {
   if (str.length === 0) {
        return str;
   } else {
      return reverse(str.substr(1)) + str.charAt(0);
   }
}

  
  
// }
console.log(reverse("house")); // "esuoh"


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}