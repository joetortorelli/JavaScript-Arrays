let input = "are all these unique";
console.log(isAllUnique(input));
function isAllUnique(input) { 
  let arr = {};
  for (let i = 0; i < input.length; i++) {
    let test = input[i];
    if (!arr[test.toString()]) 
      arr[test.toString()] = true;
    else 
      return false;
  }
  return true;
}