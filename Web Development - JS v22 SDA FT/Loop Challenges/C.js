//Print odds 1-20
for(i=1; i <= 20; i++){
    if(i % 2 == 0)
    console.log(i);
}
//Decreasing Multiples of 3
for(i=0; i <= 100; i++){
    if(i % 3 == 0)
    console.log(i);
}
//Print the sequence
for (i=0; i <= 4; i--) { 
if(i - 1.5 ==0)
console.log(i)
}
//Sigma
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
    }
    alert( sumTo(100) );
//Factorial
    function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
    return 1; 
    while (num > 1) { 
    num--;
    result *= num;
    }
    return result;
    }
    factorialize(12);