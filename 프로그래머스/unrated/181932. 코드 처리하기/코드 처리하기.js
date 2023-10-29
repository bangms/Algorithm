function solution(code) {
    let answer = '';
    let mode = 0;
    [...code].map((str, idx) => {
        if(mode === 0) {
            if(str === '1') {
                mode = 1;
            } else {
                if (idx % 2 === 0) {
                    answer += str;
                    
                }
            }
        } else {
            if(str === '1') {
                mode = 0;
            } else {
                if (idx % 2 !== 0) {
                    answer += str;
                }
            }
        }
    })
    console.log(answer);
    return answer === '' ? "EMPTY" : answer;
}