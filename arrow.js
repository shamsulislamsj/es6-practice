

//1ST WAY
//function doubleIt (num){
    //return num *2;
//}
//const result = doubleIt(50);
//console.log(result);



//2ND WAY
//const doubleIt = function myFun(num){
    //return num *2;
//}
//const result = doubleIt(50);
//console.log(result);



//3 RD WAY ES6 
//const doubleIt = num=> num*2;
//const result = doubleIt(50);
//console.log(result);

const doubleIt = num=> num * 2;

const add = (x, y) => x+y;

const gives5 = () =>5;

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = add(50, 70);

const result2 = gives5();

const result3 = doMath (7, 5);

console.log(result);

console.log(result2);

console.log(result3);


