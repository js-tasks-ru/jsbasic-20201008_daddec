/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */


function ucFirst(str) {
  
  if(isValid(str)){
    let a = str[0].toUpperCase();
    let b = str.slice( 1 );
    c = a + b;
    return c;
  }
return false;
}

function isValid(str) {
  if (str == ('')  ){
    return false;
  } 

return true;
  
  
}