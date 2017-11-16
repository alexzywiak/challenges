// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reverse = String(Math.abs(n))
        .split('')
        .reverse()
        .join('');

    return n >= 0 ? Number(reverse) : -1 * Number(reverse);
}

module.exports = reverseInt;
