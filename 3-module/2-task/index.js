
let sub = [];
function filterRange(arr, a, b) {
    
  arr.map(function(item){
    
    if( a >= item || item <= b ){
  sub.push(item)
    }
   
})

   return sub;
}