// 205. Isomorphic Strings

var isIsomorphic = function(s, t) {
    const wordOne = s;
    const wordTwo = t;
    const map = new Map();
    for (let i = 0; i < wordOne.length; i++) {
        if(map.has(wordOne[i])){
            if(map.get(wordOne[i]) !== wordTwo[i]) {
                return false;
            }
        } else {
            map.set(wordOne[i], wordTwo[i]);
        }
    }
    return new Set(map.values()).size === map.size;
};

console.log(isIsomorphic("egg", "add"))