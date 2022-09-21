import isString from './isString';
function stringToJSON(val) {
    if (isString(val) && val) {
        return JSON.parse(val);
    }
    else {
        return {};
    }
}
export default stringToJSON;