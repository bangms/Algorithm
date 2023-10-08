function solution(arr) {
    let answer = [];
    arr.map((x)=> {
        if (x >= 50 && !(x % 2)) {
            answer.push(x / 2);
        } else if (x < 50 && x % 2) {
            answer.push(x * 2);
            
        } else {
            answer.push(x);
        }
    })
    return answer;
}