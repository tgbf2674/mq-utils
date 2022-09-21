function toNumber(val) {
    if (typeof val === 'number') {
        return val;
    }
    else {
        return isNaN(parseFloat(val)) ? 0 : parseFloat(val);
    }
}
export default toNumber;