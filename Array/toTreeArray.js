import treeDefault from './arrDefault';
import isArray from '../Base/isArray';
function unTreeList(res, array, opts) {
    const optChildren = opts.children;
    const optData = opts.data;
    const optClear = opts.clear;
    for (let i = 0; i < array.length; i++) {
        const children = array[i][optChildren];
        if (optData) {
            array[i] = array[i][optData];
        }
        res.push(array[i]);
        if (children && children.length) {
            unTreeList(res, children, opts);
        }
        if (optClear)
            delete array[i][optChildren];
    }
    return res;
}
function toTreeArray(array, options) {
    if (isArray(array)) {
        return unTreeList([], array, Object.assign({}, treeDefault, options));
    }
    else {
        return [];
    }
}
export default toTreeArray;