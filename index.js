let permArr = [], usedChars = [];
function getPermutations(input) {
  for (let i = 0; i < input.length; i++) {
    let chunk = input.splice(i, 1)[0];
    usedChars.push(chunk);
    if (input.length == 0) permArr.push(usedChars.slice());
    getPermutations(input);
    input.splice(i, 0, chunk);
    usedChars.pop();
  }
  return permArr
};

console.log(JSON.stringify(getPermutations([1,2,3])));