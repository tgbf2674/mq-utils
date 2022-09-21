function isNull(val) {
    return Object.prototype.toString.call(val) === '[object Null]';
}
export default isNull;