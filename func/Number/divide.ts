import toNumberString from './toNumberString';
import toNumber from './toNumber';

function helper (dividier: number, dividicand: number): number {
  const str1 = toNumberString(dividier)
  const str2 = toNumberString(dividicand)
  return parseInt(str1.replace('.', '')) / parseInt(str2.replace('.', '')) / Math.pow(10, (str1.split('.')[1] || '').length - (str2.split('.')[1] || '').length )
}

function divide (num1: any, num2: any): number {
  const dividier = toNumber(num1)
  const dividicand = toNumber(num2)
  return helper(dividier, dividicand)
}

export default divide
