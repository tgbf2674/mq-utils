function isFunction(val) {
    return Object.prototype.toString.call(val) === '[object Function]';
}
export default isFunction;