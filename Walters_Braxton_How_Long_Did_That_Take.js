Number.prototype.isPrime = function() {
    // console.log(this);
    //   31
    if (this <= 1)
        return false;
    //    31           31
    if (this == 2 || this == 3)
        return true;
    //   31               31
    if (this % 2 == 0 || this % 3 == 0)
        return false;
    //                        5.5and some numbers
    for (var i = 5; i <= Math.sqrt(this); i += 6) // i = i + 6
        if (this % i == 0 || this % (i + 2) == 0)
            return false;
 
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
// this
let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e6 ) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }

// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(Math.sqrt(11));


// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
// rFib(20);

// iterative
// this be faster!!!
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
// iFib(20);

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");

const rere = str => {
    newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

console.log(rere(story));
console.log(`This took ${performance.now() - start} milliseconds to run`);
