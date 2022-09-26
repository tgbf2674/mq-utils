import isArray from '../Base/isArray';
function eachTreeItem(parentAllow, parent, obj, iterate, options) {
    let isAllow = false;
    let hasChild = false;
    const children = options?.children || 'children';
    if (isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            hasChild = !!children && Boolean(obj[i][children]);
            isAllow = parentAllow || iterate(obj[i]);
            if (isAllow || hasChild) {
                eachTreeItem(isAllow, obj[i], obj[i][children], iterate, options);
            }
        }
    }
}
function eachTree(obj, iterate, options) {
    return eachTreeItem(false, null, obj, iterate, options);
}
export default eachTree;