// 168. Excel Sheet Column Title

var convertToTitle = function(columnNumber) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let columnTitle = '';
    while(columnNumber > 0) {
        columnNumber--;
        columnTitle = alphabet[columnNumber % 26] + columnTitle;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return columnTitle;
};

console.log(convertToTitle(28));