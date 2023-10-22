function solution(arr) {
    let result = [...arr].reduce((acc, cur) => {
     return acc + cur;
    });    
    
    return result;
}