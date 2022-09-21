import isUndefined from '../Base/isUndefined';
import isNull from '../Base/isNull';
function padEnd(str, targetLength, target = ' ') {
    str = str.toString();
    if (str.length >= targetLength)
        return str;
    while (str.length < targetLength) {
        if (!isUndefined(target) && !isNull(target)) {
            str = str + target.toString();
        }
        else {
            str = str + ' ';
        }
    }
    return str;
}
export default padEnd;