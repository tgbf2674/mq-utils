declare function debounce(fn: () => any, wait?: number): (...args: any[]) => void;
export default debounce;
