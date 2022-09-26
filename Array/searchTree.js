import isArray from '../Base/isArray';
function searchTreeItem(parentAllow, parent, obj, iterate, options) {
    const res = [];
    let temp = [];
    let isAllow = false;
    let hasChild = false;
    const children = options.children || 'children';
    const mapChildren = options.mapChildren || children;
    if (isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            hasChild = !!children && Boolean(obj[i][children]);
            isAllow = parentAllow || iterate(obj[i]);
            if (isAllow || hasChild) {
                temp = Object.assign({}, obj[i]);
                temp[mapChildren] = searchTreeItem(isAllow, obj[i], obj[i][children], iterate, options);
                if (isAllow || temp[mapChildren].length) {
                    res.push(temp);
                }
            }
        }
        return res;
    }
    return [];
}
function searchTree(obj, iterate, options) {
    const opts = options || {};
    return searchTreeItem(false, null, obj, iterate, opts);
}
export default searchTree;