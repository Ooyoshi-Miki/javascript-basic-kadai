const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

console.log('年=' + today.getFullYear());
// 1月の値が0のため+1
console.log("月=" + (today.getMonth()+1));
console.log("日=" + today.getDate());
