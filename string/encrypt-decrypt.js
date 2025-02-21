function encryptString(S) {
    let encrypted = "";
    let i = 0;

    while (i < S.length) {
        let count = 1;
        while (i + 1 < S.length && S[i] === S[i + 1]) {
            count++;
            i++;
        }
        encrypted += S[i] + count;
        i++;
    }

    return encrypted.split("").reverse().join("");
}

function decryptString(encrypted) {
    let reversed = encrypted.split("").reverse().join(""); // Reverse first
    let decrypted = "";
    let i = 0;

    while (i < reversed.length) {
        let char = reversed[i];
        let count = "";

        i++; // Move to count part
        while (i < reversed.length && !isNaN(reversed[i])) {
            count += reversed[i];
            i++;
        }

        decrypted += char.repeat(parseInt(count, 10));
    }

    return decrypted;
}

// Test cases
console.log(encryptString("aaaaaaaaaaa")); // Output: "11a"
console.log(decryptString("11a")); // Output: "aaaaaaaaaaa"

console.log(encryptString("ostad")); // Output: "1d1a1t1s1o"
console.log(decryptString("1d1a1t1s1o")); // Output: "ostad"
