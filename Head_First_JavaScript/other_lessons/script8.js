// const palindrome = (str) => {
//   str = str.toLowerCase();
//   return str === str.split('').reverse().join('');
// };

// console.log(palindrome('Faad'));

String.prototype.palindrome = function () {
  let len = this.length - 1;
  for (let i = 0; i <= len; i++) {
    if (this.charAt(i) !== this.charAt(len - i)) {
      return false;
    }
    if (i === len - i) {
      return true;
    }
  }
  return true;
};
const phrases = ['eve', 'kayak', 'mom', 'wow', 'Not a palindrome!'];
