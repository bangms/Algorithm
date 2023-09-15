function solution(num_list, n) {
    var answer = [];
    console.log('num_list = ', num_list, ' n = ', n);
    for(let i = 0; i < n; i++) {
        answer.push(num_list[i]);
    }
    return answer;
}