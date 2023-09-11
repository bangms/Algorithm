function solution(s) {
    var newArray = Array.from(s);
    var a = newArray.sort().reverse();
    var result = a.join('').toString();
    return result;
}