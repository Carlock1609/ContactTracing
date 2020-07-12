// # Lab 11: Credit Card Validation


// Let's write a function which returns whether a string containing a credit card number is valid as a boolean. The steps are as follows:

// 1. Convert the input string into a list of ints
const stringToInt = (nums) => {
    const numsList = [];
    for(let num of nums) {
        numsList.push(Number(num))
    }
    return numsList
}
// 2. Slice off the last digit.  That is the **check digit**.
const getNumsObject = (numsList) => {
    return {check: numsList.splice(-1), numsList: numsList}
}
// 3. Reverse the digits.
const reverseNums = (nums) => {
    nums.numsList.reverse()
    return nums
}
// 4. Double every other element in the reversed list.
const doubleNums = (nums) => {
    for(let i = 0; i < nums.numsList.length; i++) {
        if(i % 2 === 0) {
            nums.numsList[i] *= 2
        }
    }
    return nums
}
// 5. Subtract nine from numbers over nine.
const subtractNums = (nums) => {
    for(let i = 0; i < nums.numsList.length; i++) {
        if(nums.numsList[i] > 9) {
            nums.numsList[i] -= 9
        }
    }
    return nums
}
// 6. Sum all values.
const sumNums = (nums) => {
    let sum = 0;
    for(let num of nums.numsList) {
        sum += num
    }
    nums.sum = sum
    return nums
}
// 7. Take the second digit of that sum.
const getLastDigit = (nums) => {
    nums.sum.split(',')
    console.log(nums)
}
getLastDigit(sumNums(subtractNums(doubleNums(reverseNums(getNumsObject(stringToInt('4556737586899855')))))))

// 8. If that matches the check digit, the whole card number is valid.

// For example, the worked out steps would be:

// 1. `4  5  5  6  7  3  7  5  8  6  8  9  9  8  5  5`
// 2. `4  5  5  6  7  3  7  5  8  6  8  9  9  8  5`
// 3. `5  8  9  9  8  6  8  5  7  3  7  6  5  5  4`
// 4. `10 8  18 9  16 6  16 5  14 3  14 6  10 5  8`
// 5. `1  8  9  9  7  6  7  5  5  3  5  6  1  5  8`
// 6. 85
// 7. 5
// 8. Valid!
