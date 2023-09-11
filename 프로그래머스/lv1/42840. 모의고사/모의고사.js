function solution(answers) {
    var answer = [];
    var a = [1,2,3,4,5];
    var b = [2,1,2,3,2,4,2,5];
    var c = [3,3,1,1,2,2,4,4,5,5];
    var countA = 0;
    var countB = 0;
    var countC = 0;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i%answers.length] == a[i % a.length]) {
            countA = countA+1
        }
        if (answers[i%answers.length] == b[i % b.length]) {
            countB = countB+1;
        }
        if (answers[i%answers.length] == c[i % c.length]) {
            countC = countC+1;
        }
    }
 
var max = Math.max(countA,countB,countC);
        
    if(countA === max) {
        answer.push(1);
    }
    if(countB === max) {
        answer.push(2);
    }
    if(countC === max) {
        answer.push(3);
    }
    
    return answer;
}