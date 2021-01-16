
function camelize(str) {
  
  let newArr = str .split('-') 
  let map1 = newArr .map(
     
   function  (word, index)  {
      if (index == 0 ){
      return  word; 
      } else {
      return  word[0].toUpperCase() + word.slice(1);
      }
      
     }
   ) 
 return map1 
   .join('');
}