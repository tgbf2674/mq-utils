function arrayIndexOf(list, val) {
    if (list.indexOf) {
        return list.indexOf(val);
    }
    for (let i = 0; i < list.length; i++) {
        if (val === list[i]) {
            return i;
        }
    }
}
export default arrayIndexOf;