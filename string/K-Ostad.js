function areKOstad(str1, str2, k) {
    if (str1 === str2) return "Yes"; // No modifications needed
    
    let freq1 = {};
    let freq2 = {};
    
    for (let char of str1) freq1[char] = (freq1[char] || 0) + 1;
    for (let char of str2) freq2[char] = (freq2[char] || 0) + 1;
    
    let diff = 0;
    let allChars = new Set([...str1, ...str2]);
    
    allChars.forEach(char => {
        diff += Math.abs((freq1[char] || 0) - (freq2[char] || 0));
    });
    
    return diff / 2 <= k ? "Yes" : "No";
}

// Test cases
console.log(areKOstad("anagram", "grammar", 3)); // Output: Yes
console.log(areKOstad("ostad", "boss", 1)); // Output: No