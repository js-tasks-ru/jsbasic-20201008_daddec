let arr = [5, 3, 8, 1];
let sub = [];
function filterRange(arr, a, b) {

  arr.forEach(function(item){
    if( a >= item || item <= b ){
  sub.push(item)
    }  
})
   return sub;
}