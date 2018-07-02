// time complexity: O(n)
// space complexity: O(n)
console.log(isAllUnique('u bigmad'))
function isAllUnique(input) { 
    let arr = new Array(input.length);
    for (let i = 0; i < input.length; i++) { 
        if (arr[input[i]]) { 
            return false;
        }
        arr[input[i]] = true;
    }
    return true;
}

// time complexity: O(log(n))
// space complexity: O(n)
console.log(reverseString('u mad, u big mad'));
function reverseString(input) { 
    let str = input.split('');
    for (let i = 0; i < str.length/2; i++) { 
        str[str.length-i-1] = str[i];
        str[i] = input[input.length-i-1];
    }
    return str.join('');
}

// grr....
// space complexity: O(n)
// time complexity: O(n^2)
console.log(isPermutation('bonomatoz ', 'matonooz b'));
function isPermutation(str1, str2) { 
    if (str1.length !== str2.length) return false;
    let usedChars = new Array(str1.length);
    for (let i = 0; i < str1.length; i++) { 
        for (let j = 0; j < str2.length && !usedChars[i]; j++) { 
            if (str1[i] === str2[j]) { 
                usedChars[i] = str1[i];
                str2 = str2.substring(0, j) + str2.substring(j+1, str2.length);
            }
        }
    }
    return (str2.length === 0) ? true : false;
}

// time complexity: O(n)
// space complexity: O(1)?
console.log(removeSpaces('remove spaces from me plz'));
function removeSpaces(input) {
    for (let i = 0; i < input.length; i++) 
        if (input[i] === ' ') 
            input = input.substring(0, i) + '%20' + input.substring(i+1, input.length);
    return input;
}

// this is terrible and took me forever
// time complexity: O(n)
// space complexity: O(2)?

console.log(stringCompression('bbbbaaaaeeea'));
function stringCompression(input) { 
    let curr = input[0];
    let count = 1;
    for (let i = 0; i+1 < input.length; i++) { 
        console.log(i + ': ' + input[i+1]);
        if (curr !== input[i+1] && i+1 !== input.length) { 
            curr = input[i+1]
            input = input.substring(0,i+1) + count.toString() + input.substring(i+1, input.length);
            count = 0;
        } else { 
            curr = input[i+1];
            count++;
        }
    }
    input = input.substring(0, input.length-1);
    return input + curr + count;
}

// time complexity: O(n^2)
// space complexity: O(4)
console.log(JSON.stringify(rotateImage([[1,2,3],[4,5,6],[7,8,9]], 3)));
function rotateImage(matrix, n) { 
    for (let layer = 0; layer < n/2; ++layer) { 
        let first = layer, last = n-1-layer;
        for (let i = first; i < last; ++i) { 
            let offset = i - first;
            let top = matrix[first][i];
            console.log(top)
            
            ;
            matrix[first][i] = matrix[last-offset][first];
            matrix[last-offset][first] = matrix[last][last-offset];
            matrix[last][last-offset] = matrix[i][last]
            matrix[i][last] = top;
        }
    }
    return matrix;
}

// let permArr = [], usedChars = [];
// function getPermutations(input) {
//   for (let i = 0; i < input.length; i++) {
//     let chunk = input.splice(i, 1)[0];
//     usedChars.push(chunk);
//     if (input.length == 0) permArr.push(usedChars.slice());
//     getPermutations(input);
//     input.splice(i, 0, chunk);
//     usedChars.pop();
//   }
//   return permArr
// };

// console.log(JSON.stringify(getPermutations([1,2])));