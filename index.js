//write your code here
const getAverage = (numbers) => {
    let total = 0
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total / numbers.length;
}


const findMax = (numbers) => {
    let firstNum = numbers[0]
    let largestNum;
    for (i = 0; i < numbers.length; i++) {
        if (firstNum > numbers[i]) {
            firstNum = numbers[i]
        } else {
            largestNum = numbers[i]
        }
    }
    console.log(firstNum)
}
findMax([3, 7, 2, 9, 5])
findMax([-1, -5, -3])


/*.  const findMax = (numbers) => {
        let max = numbers[0]
        for(i = 0; i < numbers.length; i++) {
            if(max > numbers[i]) {
            max = numbers[i]
        }
            return max
    }

*/