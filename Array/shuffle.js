import random from '../Number/random';
import isArray from '../Base/isArray';
import isString from '../Base/isString';
function shuffle(arr) {
    const res = [];
    if (isString(arr)) {
        arr = arr.split('');
    }
    if (isArray(arr)) {
        let index = 0;
        const list = arr.slice();
        const len = list.length - 1;
        for (let i = 0; i <= len; i++) {
            index = len > 0 ? random(0, len) : 0;
            res.push(list[index]);
            list.splice(index, 1);
        }
    }
    return res;
}
export default shuffle;