function solution(num_list) {
    var answer = 0;
    const sum = num_list.reduce((a, b) => a + b)
    const mul = num_list.reduce((a, b) => a * b)
    console.log('sum = ', sum, ' mul = ', mul, ' 제곱 = ', Math.pow(sum, 2));
    return  Math.pow(sum, 2) > mul ? 1 : 0;
}