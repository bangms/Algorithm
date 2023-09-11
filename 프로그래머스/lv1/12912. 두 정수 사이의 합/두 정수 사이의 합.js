function solution(a, b) {
    var result = 0;
    if (a === b) {
        return a;
    } else if (a > b) {
        for (var i = b; i < a+1; i++) {
           result += i;
        }    
    } else if (a < b) {
        for (var i = a; i < b+1; i++) {
            result += i;
        }  
    }
 return result;
}