



function sumSalary(salaries){
  let b = 0;
for(let key in salaries){
  let a = (salaries[key]);
  if(typeof a == 'number'){
     b += a;
  } 
}
return b;
}