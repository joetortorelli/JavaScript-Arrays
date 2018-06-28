// let permArr = [], usedChars = [];
// let recur = 0;
// function getPermutations(input) {
//     recur++;
//   for (let i = 0; i < input.length; i++) {
//     console.log('input: ' + input);
//     let chunk = input.splice(i, 1)[0];
//     usedChars.push(chunk);
//     console.log('perm: ' + permArr);
//     console.log('chunk: ' + chunk);
//     console.log('uc: ' + usedChars);
//     console.log('i: ' + i);
//     console.log('recur: ' + recur);
//     debugger;
//     if (input.length == 0) permArr.push(usedChars.slice());
//     getPermutations(input);
//     console.log('z: ' + input.length);
//     input.splice(i, 0, chunk);
//     console.log('z: ' + input.length);
    
//     usedChars.pop();
//   }
//   return permArr
// };

// console.log(JSON.stringify(getPermutations([1,2])));