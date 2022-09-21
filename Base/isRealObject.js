function isRealObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}
export default isRealObject;