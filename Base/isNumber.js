function isNumber(val) {
    return Object.prototype.toString.call(val) === '[object Number]';
}
export default isNumber;