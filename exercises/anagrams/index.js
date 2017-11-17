// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function createCharMap(str) {
//     const map = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         map[char] = map[char] + 1 || 1;
//     }

//     return map;
// }

// function anagrams(stringA, stringB) {
//     const aMap = createCharMap(stringA);
//     const bMap = createCharMap(stringB);

//     if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//         return false;
//     }

//     for (let char in aMap) {
//         if (aMap[char] !== bMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

function anagrams(stringA, stringB) {
    const sortA = stringA.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');
    const sortB = stringB.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');

    return sortA === sortB;
}

module.exports = anagrams;
