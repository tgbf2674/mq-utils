function lastIndexOf(list, val) {
    for (let i = list.length - 1; i > 0; i--) {
        if (list[i] === val)
            return i;
    }
    return -1;
}
export default lastIndexOf;