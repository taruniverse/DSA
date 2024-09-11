// 67. Add Binary
// doing
var addBinary = function (a, b) {
    let result = '';    // To store the final result
    let carry = 0;     // To store carry for each addition
    let i = a.length - 1; // Pointer for the end of string 'a'
    let j = b.length - 1; // Pointer for the end of string 'b'

    // Traverse both strings from right to left
    while (i >= 0 || j >= 0 || carry) {
        // Get the current bits and add carry if any
        let bitA = i >= 0 ? a[i] - '0' : 0; // Convert char to number
        let bitB = j >= 0 ? b[j] - '0' : 0; // Convert char to number
        // Calculate sum of current bits and carry
        let sum = bitA + bitB + carry;

        // Compute the new carry (1 or 0) and the current bit (0 or 1)
        carry = Math.floor(sum / 2);
        result = (sum % 2) + result;

        // Move to the next bits
        i--;
        j--;
    }

    return result;
};

console.log(addBinary("1010", "1011"));