function getType(val) {
    const res = Object.prototype.toString.call(val);
    return res.split(' ')[1].slice(0, -1);
}
export default getType;