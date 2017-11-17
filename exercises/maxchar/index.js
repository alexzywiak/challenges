// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = {};
    let max;

    str.split('').forEach(char => {
        if(!max) {
            max = char;
        }
        
        map[char] = map[char] + 1 || 1;

        if(map[char] > map[max]) {
            max = char;
        }
    });

    return max;
}

module.exports = maxChar;
