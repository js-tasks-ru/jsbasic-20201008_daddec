let arr = [];

function camelize(str){
  let a = str.split('-');
  
for( let item of a){
  if (item[0]){
  arr.push (item[0].toUpperCase() + item.slice(1))
  }
}
return (arr.join(''));
}