function maxDiff(arr) {
    if (arr.length !== 0) {
        const smallestNumber = Math.min(...arr);
        const largestNumber = Math.max(...arr);
        const diff = largestNumber - smallestNumber;
        return diff;
    } else {
        return 0;
    }
}

