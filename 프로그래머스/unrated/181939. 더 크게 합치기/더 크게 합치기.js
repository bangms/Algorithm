function solution(a, b) {
    const ab = a + '' + b;
    const ba = b + '' + a;
    return Number(ab) > Number(ba) ? Number(ab) : Number(ba);
}