import toValueString from './toValueString';
function trimRight(str) {
    return str && str.trimRight ? str.trimRight() : toValueString(str).replace(/^[\s\uFEFF\xA0]+$/g, '');
}
export default trimRight;