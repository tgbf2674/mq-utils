import now from './now';
import { toStringDate} from '../index';

function timestamp (str?: string | number | Date, format?: string): number {
  if (str) {
    const date = toStringDate(str, format)
    return date.getTime()
  }
  return now()
}

export default timestamp
