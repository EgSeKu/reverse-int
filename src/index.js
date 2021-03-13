module.exports = function reverse(num){
    let res = num.toString();
    return parseInt(res.split('').reverse().join(''));
};