import now from './now';
import mmqUtils from '../index';

function timestamp (str?: string | number | Date, format?: string): number {
  if (str) {
    const date = mmqUtils.toStringDate(str, format)
    return date.getTime()
  }
  return now()
}

export default timestamp
