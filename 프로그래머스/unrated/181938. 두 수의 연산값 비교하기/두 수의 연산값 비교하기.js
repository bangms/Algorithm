function solution(a, b) {
    const str = Number(a + '' + b);
    const mul = 2 * a * b;
    
    return (str == mul 
            ? str 
            : str > mul 
                ? str 
                : mul)
}