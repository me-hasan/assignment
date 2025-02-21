function generatePascalsTriangle(numRows) {
    if (numRows <= 0) return [];

    let triangle = [[1]]; // First row is always [1]

    for (let i = 1; i < numRows; i++) {
        let prevRow = triangle[i - 1];
        let newRow = [1]; // First element is always 1

        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]); // Sum of two numbers above
        }

        newRow.push(1); // Last element is always 1
        triangle.push(newRow);
    }

    return triangle;
}

// Test case
console.log(generatePascalsTriangle(5));
