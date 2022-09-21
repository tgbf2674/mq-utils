function isSymbol(val) {
    return Object.prototype.toString.call(val) === '[object Symbol]';
}
export default isSymbol;