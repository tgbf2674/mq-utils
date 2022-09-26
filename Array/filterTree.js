import eachTree from './eachTree';
function filterTree(obj, iterate, options) {
    const opts = options || {};
    const res = [];
    eachTree(obj, function (item) {
        if (iterate(item))
            res.push(item);
    }, opts);
    return res;
}
export default filterTree;