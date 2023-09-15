function solution(n) {
    var answer = 0;
    for(let i = n; i > 0; i -= 2) {
        n % 2 ? answer += i : answer += Math.pow(i, 2);
    }
    return answer;
}