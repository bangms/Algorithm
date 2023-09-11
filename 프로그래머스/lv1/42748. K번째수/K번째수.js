var choice = [];
var answer = [];
function solution(array, commands) {
    for (var i = 0; i <commands.length; i++){
        choice.push(array.slice(commands[i][0]-1, commands[i][1]).sort(function (a,b) {
            return a-b;
        }));
        answer.push(choice[i][commands[i][2]-1]);
}
    return answer;
}