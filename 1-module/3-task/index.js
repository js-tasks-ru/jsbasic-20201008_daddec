/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */


function ucFirst(str) {
  if (str.length == false){ 
    return str;
  }
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}





