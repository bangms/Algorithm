function solution(num_list) {
    let odd = '';
    let even = '';
    num_list.map((num)=> {
        num % 2 ? even += num : odd += num;
    })
    return (odd * 1) + (even * 1);
}