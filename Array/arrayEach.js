function arrayEach(list, iterate, context) {
    if (list) {
        if (list.forEach) {
            list.forEach(iterate, context);
        }
        else {
            for (let i = 0; i < list.length; i++) {
                iterate.call(context, list[i], i, list);
            }
        }
    }
}
export default arrayEach;