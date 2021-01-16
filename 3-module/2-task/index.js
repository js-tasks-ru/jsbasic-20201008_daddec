function filterRange(arr, a, b) {
    let sub = [];
  arr.map(function(item){
    
    if(a <= item && item <= b){
  sub.push(item)
    }
   
})

   return sub;
}