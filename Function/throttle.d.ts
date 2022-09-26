declare function throttle(fn: () => any, wait?: number): (...args: any[]) => void;
export default throttle;
