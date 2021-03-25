function addUpTo(n){      //O(n) - Linear
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

function addUpTo2(n){      //O(1) - Constant
    return n * (n + 1) / 2;
}


var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1)/1000} seconds.`)