import toNumberString from './toNumberString';
import toNumber from './toNumber';
function helper(dividier, dividicand) {
    const str1 = toNumberString(dividier);
    const str2 = toNumberString(dividicand);
    return parseInt(str1.replace('.', '')) / parseInt(str2.replace('.', '')) / Math.pow(10, (str1.split('.')[1] || '').length - (str2.split('.')[1] || '').length);
}
function divide(num1, num2) {
    const dividier = toNumber(num1);
    const dividicand = toNumber(num2);
    return helper(dividier, dividicand);
}
export default divide;