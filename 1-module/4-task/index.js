/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */


function checkSpam(str) {
  let lowerCaseStr = str.toLowerCase();

  let spam = lowerCaseStr.includes('1xbet') || lowerCaseStr.includes('xxx');
  return spam;
}
