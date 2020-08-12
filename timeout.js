function doSomething(){
    console.log(5555);
}
console.log(1222);
console.log(3333);
// setTimeout(doSomething, 4000);
// setTimeout(function(){
//     console.log('lazy and waiting')
// },4300);
setInterval(function(){
    console.log('Thanks');
}, 3000);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);

// const start = new Date();
// let sum = 0;
// for(let i = 0; i < 10000000; i++){
//     sum++;
// }
// const end = new Date();
// console.log(end - start);