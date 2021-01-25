function getMinMax(str) {
  let h = "";
  for(let i of str){
    if(i ===","){
      i = " " ;
      h += i
    }else{
      h += i
    }
  }
  let akk = [];
  let arr = h.split(" ")
  for(let i of arr){
    if( +i ){
      akk.push(i)
    }
  }
  let obj = {};
  obj.max = Math.max(...akk);
  obj.min = Math.min(...akk)
return obj ;
}
