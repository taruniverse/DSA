// 125. Valid Palindrome

var isPalindrome = function(s) {
    const modifyStr = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const reverseStr = modifyStr.split("").reverse().join().replace(/,/g, '');
    if(modifyStr == reverseStr) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));