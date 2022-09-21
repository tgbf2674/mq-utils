function isError(val) {
    return Object.prototype.toString.call(val) === '[object Error]';
}
export default isError;