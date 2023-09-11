function solution(arr) {
    // 배열 안에 있는 값들을 모두 더하고
    // 개수 만큼 나누기
    var answer = 0;
    var addNum = 0;
    
    for (var i = 0; i<arr.length; i++){
        addNum += arr[i];
    }
    answer = addNum / arr.length;
    
    return answer;
}