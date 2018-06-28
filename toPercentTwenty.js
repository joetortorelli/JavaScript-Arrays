// change all spaces in a string to %20
let input = "anotha anotha anotha one bytes the dust";
console.log(changeToPercentTwenty(input));
function changeToPercentTwenty(input) { 
  let str = input.split('');
  for (let i = 0; i < str.length; i++)
    if (str[i] === ' ') 
      str.splice(i, 1, '%20');
  return str.join('');
}