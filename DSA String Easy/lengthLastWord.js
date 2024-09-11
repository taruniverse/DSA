//  58. Length of Last Word

var lengthOfLastWord = function(s) {
    const trimStr = s.trim();
    const array = trimStr.split(' ');
    const lastWord = array.pop();
    return lastWord.length;
};

console.log(lengthOfLastWord("Hello World"));