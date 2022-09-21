function isBoolean(val) {
    return Object.prototype.toString.call(val) === '[object Boolean]';
}
export default isBoolean;