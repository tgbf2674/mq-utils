function isNumberFinite(val) {
    return typeof val === 'number' && isFinite(val);
}
export default isNumberFinite;