function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}
export default isArray;