// given two strings determine if one is a permutation of the other
let str1 = "west";
let str2 = "east";
console.log(isPermutation(str1, str2));
function isPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++)
    if (str2.indexOf(str1[i]) > -1) 
      str2 = str2.substring(0, str2.indexOf(str1[i])) + str2.substring(str2.indexOf(str1[i]), str2.length)
    else return false;
  return true;
}