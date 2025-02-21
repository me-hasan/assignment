function maximumGap(nums) {
    if (nums.length < 2) return 0;

    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);

    if (minVal === maxVal) return 0; // All elements are the same

    let n = nums.length;
    let bucketSize = Math.max(1, Math.floor((maxVal - minVal) / (n - 1)));
    let bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;

    let buckets = new Array(bucketCount).fill(null).map(() => ({
        min: Infinity,
        max: -Infinity,
    }));

    // Place elements in buckets
    for (let num of nums) {
        let idx = Math.floor((num - minVal) / bucketSize);
        buckets[idx].min = Math.min(buckets[idx].min, num);
        buckets[idx].max = Math.max(buckets[idx].max, num);
    }

    // Find the max gap
    let maxGap = 0, prevMax = minVal;
    for (let bucket of buckets) {
        if (bucket.min === Infinity) continue; // Skip empty bucket
        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
    }

    return maxGap;
}

// Test cases
console.log(maximumGap([3,6,9,1])); // Output: 3
console.log(maximumGap([10])); // Output: 0
console.log(maximumGap([1,1000000000])); // Output: 999999999
