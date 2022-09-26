import isArray from '../Base/isArray';
function mapTreeItem(parentAllow, parent, obj, iterate, options) {
    let isAllow = false;
    let hasChild = false;
    const opts = options || {};
    const res = [];
    const children = options?.children || 'children';
    const mapChildren = options?.mapChildren || children;
    if (isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            hasChild = !!children && Boolean(obj[i][children]);
            isAllow = parentAllow || iterate(obj[i]);
            res.push(iterate(obj[i]));
            if ((isAllow || hasChild) && res && obj[i][children]) {
                res[i][mapChildren] = mapTreeItem(isAllow, obj[i], obj[i][children], iterate, opts);
            }
        }
    }
    return res;
}
function mapTree(obj, iterate, options) {
    return mapTreeItem(false, null, obj, iterate, options);
}
export default mapTree;