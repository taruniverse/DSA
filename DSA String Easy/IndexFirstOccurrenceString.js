// 28. Find the Index of the First Occurrence in a String

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle) === 0 ? 0 : haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));