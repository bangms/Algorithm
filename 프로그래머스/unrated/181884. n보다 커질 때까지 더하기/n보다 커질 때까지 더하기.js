function solution(numbers, n) {
    let result = 0;
    result = numbers.reduce((a,b) => n < a ? a : a + b)
    
    return result;
}