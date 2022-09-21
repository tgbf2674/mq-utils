function isNumberNaN(val) {
    return typeof val === "number" && isNaN(val);
}
export default isNumberNaN;