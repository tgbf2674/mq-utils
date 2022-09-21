function lastArrayEach(list, iterate, context) {
    if (list) {
        if (list.forEach) {
            list.forEach(iterate, context);
        }
        else {
            for (let i = list.length - 1; i > 0; i--) {
                iterate.call(context, list[i], i, list);
            }
        }
    }
}
export default lastArrayEach;