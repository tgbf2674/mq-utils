import toNumber from './toNumber';
import toNumberString from './toNumberString';
function helper(multiplier, multiplicand) {
    const str1 = toNumberString(multiplier);
    const str2 = toNumberString(multiplicand);
    return parseInt(str1.replace('.', '')) * parseInt(str2.replace('.', '')) / Math.pow(10, (str1.split('.')[1] || '').length + (str2.split('.')[1] || '').length);
}
function multiply(num1, num2) {
    const multiplier = toNumber(num1);
    const multiplicand = toNumber(num2);
    return helper(multiplier, multiplicand);
}
export default multiply;